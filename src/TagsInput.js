/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { observable } from 'mobx'
import { observer, inject, useLocalStore } from 'mobx-react'
import Flex from './Flex'
import DefaultTag from './Tag'
import theme from './theme'

let isValidInput = (tag, tags) => !_.isEmpty(tag) && !_.includes(tag, tags)

let TagsInput = ({
  tags,
  addTag = _.noop,
  removeTag,
  submit = _.noop,
  tagStyle,
  placeholder = 'Search...',
  splitCommas,
  onBlur = _.noop,
  onInputChange = _.noop,
  onTagClick = _.noop,
  Tag = DefaultTag,
  ...props
}) => {
  let state = useLocalStore(() => ({ currentInput: '' }))
  addTag = splitCommas
    ? _.flow(
        _.split(','),
        _.invokeMap('trim'),
        _.compact,
        _.uniq,
        _.difference(_, tags),
        _.map(addTag)
      )
    : _.flow(
        _.trim,
        addTag
      )
  return (
    <div>
      <Flex
        wrap
        alignItems="center"
        gap="xs"
        css={[
          { cursor: 'text' },
          _.omit(['height', 'maxWidth'], theme.inputStyle),
        ]}
      >
        {_.map(
          t => (
            <Tag
              key={t}
              value={t}
              {...{ removeTag, tagStyle }}
              onClick={() => onTagClick(t)}
            />
          ),
          tags
        )}
        <input
          css={{
            ...theme.inputStyle,
            padding: 0,
            height: 'auto',
            border: 'none',
            outline: 'none',
            flex: 1,
            lineHeight: 0,
            marginLeft: theme.spaces.xs,
          }}
          onChange={e => {
            state.currentInput = e.target.value
            onInputChange()
          }}
          onBlur={() => {
            if (isValidInput(state.currentInput, tags)) {
              addTag(state.currentInput)
              state.currentInput = ''
              onBlur()
            }
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' && !state.currentInput) submit()
            if (
              (_.includes(e.key, ['Enter', 'Tab']) ||
                (splitCommas && e.key === ',')) &&
              isValidInput(state.currentInput, tags)
            ) {
              addTag(state.currentInput)
              state.currentInput = ''
              e.preventDefault()
            }
            if (e.key === 'Backspace' && !state.currentInput && tags.length) {
              let last = _.last(tags)
              removeTag(last)
              state.currentInput = last
              e.preventDefault()
            }
          }}
          value={state.currentInput}
          placeholder={placeholder}
          {...props}
        />
      </Flex>
    </div>
  )
}

// Just uses an internal observable array
export let MockTagsInput = inject(() => {
  let tags = observable([])
  return {
    tags,
    addTag(tag) {
      tags.push(tag)
    },
    removeTag(tag) {
      tags = _.without(tag, tags)
    },
  }
})(TagsInput)
MockTagsInput.displayName = 'MockTagsInput'

export default observer(TagsInput)
