/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { Text } from './Typography'
import theme from './theme'

let PagerItem = ({ active, disabled, ...props }) => (
  <Text small as="span"
    css={[
      {
        paddingLeft: theme.spaces.sm,
        paddingRight: theme.spaces.sm,
        margin: `0 ${theme.space(0.25)}px`,
        background: theme.colors.neutrals[0],
        borderRadius: theme.borderRadius,
        cursor: 'pointer',
        display: 'inline-block',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: '#9b9b9b',
        '&:hover': {
          background: '#f5f5f5',
        }
      },
      active && {
        backgroundColor: '#0076de',
        color: '#fff',
      },
      disabled && {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    ]}
    {...props}
  />
)

export default observer(PagerItem)
