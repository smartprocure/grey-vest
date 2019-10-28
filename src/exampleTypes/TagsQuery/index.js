import React from 'react'
import _ from 'lodash/fp'
import F from 'futil-js'
import { Flex } from '../../greyVest'
import { contexturify } from '../../utils/hoc'
import { useLens } from '../../utils/react'
import { getTagStyle } from './utils'
import TagActionsMenu from './TagActionsMenu'
import ActionsMenu from './ActionsMenu'

const field = 'word'

let TagsQuery = ({
  tree,
  node,
  theme: { Icon, Popover, TagsInput, Tag },
  style,
  ...props
}) => {
  let open = useLens(false)

  let TagWithPopover = ({ onClick, ...props }) => {
    let tagOpen = useLens(false)
    return (
      <>
        <Tag
          onClick={tag => {
            F.on(tagOpen)()
            onClick(tag)
          }}
          {...props}
        />
        <Popover open={tagOpen}>
          <TagActionsMenu {...{ tag: props.value, node, tree }} />
        </Popover>
      </>
    )
  }

  return (
    <Flex className="tags-query" style={style}>
      <TagsInput
        splitCommas
        tags={_.map(field, node.tags)}
        addTag={tag => {
          tree.mutate(node.path, {
            tags: [...node.tags, { [field]: tag, distance: 3 }],
          })
        }}
        removeTag={tag => {
          tree.mutate(node.path, {
            tags: _.reject({ [field]: tag }, node.tags),
          })
        }}
        tagStyle={getTagStyle(node, field)}
        submit={tree.triggerUpdate}
        Tag={TagWithPopover}
        style={{ flex: 1, border: 0 }}
        {...props}
      />
      <div onClick={F.on(open)}>
        <Icon icon="TableColumnMenu" />
        <Popover open={open} style={{ right: 0 }}>
          <ActionsMenu {...{ node, tree, open }} />
        </Popover>
      </div>
    </Flex>
  )
}

export default contexturify(TagsQuery)
