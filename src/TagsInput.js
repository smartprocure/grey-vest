/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import _ from 'lodash/fp'
import { observer, useLocalStore } from 'mobx-react'
import Flex from './Flex'
import DefaultTag from './Tag'
import theme from './theme'

let isValidInput = (tag, tags) => !_.isEmpty(tag) && !_.includes(tag, tags)

let TagsList = ({
  Tag,
  onTagClick,
  removeTag,
  tagStyle,
  tags,
  children,
  ...props
}) => (
  <Flex wrap alignItems="center" gap="xs" css={{ cursor: 'text' }} {...props}>
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
    {children}
  </Flex>
)

let Input = observer(
  ({
    tags,
    addTag = _.noop,
    removeTag,
    submit = _.noop,
    placeholder = 'Search...',
    splitCommas,
    onBlur = _.noop,
    onChange = _.noop,
    ...props
  }) => {
    let state = useLocalStore(() => ({ currentInput: '' }))
    return (
      <input
        css={{
          ...theme.inputStyle,
          ...theme.fonts.Text,
          padding: 0,
          height: 'auto',
          minHeight: 0,
          border: 'none',
          outline: 'none',
          flex: 1,
          marginLeft: theme.spaces.xs,
        }}
        onChange={e => {
          state.currentInput = e.target.value
          onChange()
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
    )
  }
)

let TagsInput = ({
  autoFocus,
  tags,
  flipped,
  readOnly,
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
  let input = !readOnly && (
    <Input
      {...{
        tags,
        addTag,
        removeTag,
        submit,
        placeholder,
        splitCommas,
        onBlur,
        onInputChange,
        autoFocus,
      }}
    />
  )
  return (
    <Flex
      column
      css={theme.inputStyle}
      alignItems="stretch"
      justifyContent="center"
      gap="sm"
      {...props}
    >
      {flipped && input}
      {!(flipped && _.isEmpty(tags)) && (
        <TagsList
          {...{
            Tag,
            onTagClick,
            removeTag,
            tagStyle,
            tags: F.when(flipped, _.reverse, tags),
          }}
        >
          {!flipped && input}
        </TagsList>
      )}
    </Flex>
  )
}

export default observer(TagsInput)
