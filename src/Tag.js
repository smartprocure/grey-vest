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
}) => {
  let closeHover = React.useState(false)
  return (
    <Flex
      inline
      css={{
        backgroundColor: theme.colors.neutrals[3],
        color: theme.colors.neutrals[8],
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: theme.borderRadius,
        wordBreak: 'break-all',
        '.remove-button': { opacity: 0.5 },
        transition: 'all 0.2s ease-out',
        '&:hover': {
          backgroundColor: F.view(closeHover)
            ? theme.colors.errors[3]
            : theme.colors.neutrals[4],
          '.remove-button': {
            opacity: 1,
            color: F.view(closeHover) && theme.colors.errors[2],
          },
        },
        ...F.callOrReturn(tagStyle, value),
      }}
      alignItems="center"
      onClick={onClick}
      {...props}
    >
      <Text
        small
        css={{
          lineHeight: theme.lineHeights[1],
          padding: theme.spaces.xs,
          paddingLeft: theme.spaces.sm,
          paddingRight: removeTag ? theme.spaces.xs : theme.spaces.sm,
        }}
      >
        {value}
      </Text>
      {removeTag && (
        <Icon
          icon="close"
          size={2}
          className="remove-button"
          onClick={e => {
            e.stopPropagation()
            removeTag(value)
          }}
          css={{
            verticalAlign: 'middle',
            padding: `0 ${theme.spaces.xs}px`,
          }}
          {...F.domLens.hover(closeHover)}
        />
      )}
    </Flex>
  )
}

export default observer(Tag)
