/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { forwardRef, useState } from 'react'
import F from 'futil'
import { observer } from 'mobx-react'
import Flex from './Flex'
import Icon from './Icon'
import { Text } from './Typography'
import theme from './theme'

let Tag = ({ value, removeTag, tagStyle, ...props }, ref) => {
  let closeHover = useState(false)
  return (
    <Flex
      inline
      css={{
        backgroundColor: theme.colors.neutrals[0],
        color: theme.colors.text,
        cursor: 'pointer',
        borderRadius: theme.borderRadius,
        '.remove-button': { opacity: 0.5 },
        transition: 'all 0.2s ease-out',
        paddingLeft: theme.spaces.sm,
        paddingRight: removeTag ? theme.spaces.xs : theme.spaces.sm,
        '&:hover': F.view(closeHover) && {
          backgroundColor: theme.colors.pastels.error,
          color: theme.colors.text,
          '.remove-button': { color: theme.colors.error },
        },
        '&:hover .remove-button': { opacity: 1 },
        ...F.callOrReturn(tagStyle, value),
      }}
      alignItems="center"
      gap="xs"
      {...{ ref, ...props }}
    >
      <Text small>{value}</Text>
      {removeTag && (
        <Icon
          icon="close"
          size={2}
          className="remove-button"
          onClick={e => {
            e.stopPropagation()
            removeTag(value)
          }}
          {...F.domLens.hover(closeHover)}
        />
      )}
    </Flex>
  )
}

export default _.flow(
  forwardRef,
  observer
)(Tag)
