/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import F from 'futil'
import { observer } from 'mobx-react'
import Flex from './Flex'
import Icon from './Icon'
import { Text } from './Typography'
import theme from './theme'

let RemoveTagIcon = props => <Icon icon="close" size={2} {...props} />

let Tag = ({
  value,
  removeTag,
  RemoveIcon = RemoveTagIcon,
  tagStyle,
  onClick,
  ...props
}) => (
  <Flex
    inline
    as="span"
    css={{
      backgroundColor: theme.colors.neutrals[3],
      color: theme.colors.neutrals[8],
      display: 'inline-block',
      cursor: 'pointer',
      borderRadius: theme.borderRadius,
      wordBreak: 'break-all',
      ...F.callOrReturn(tagStyle, value),
    }}
    alignItems="center"
    onClick={onClick}
    {...props}
  >
    <Text
      small
      css={{
        lineHeight: 1,
        padding: theme.spaces.xs,
        paddingLeft: theme.spaces.sm,
        paddingRight: removeTag ? theme.spaces.xs : theme.spaces.sm
      }}
    >
      {value}
    </Text>
    {removeTag && (
      <Icon icon="close" size={2}
        className="remove-button"
        onClick={e => {
          e.stopPropagation()
          removeTag(value)
        }}
        css={{ verticalAlign: 'middle', padding: `0 ${theme.spaces.xs}px` }}
      />
    )}
  </Flex>
)

export default observer(Tag)
