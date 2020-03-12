/** @jsx jsx */
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react'
import { Text } from './Typography'
import theme from './theme'

let PagerItem = ({ active, disabled, ...props }) => (
  <Text
    small
    css={[
      {
        paddingLeft: theme.spaces.sm,
        paddingRight: theme.spaces.sm,
        lineHeight: `${theme.space(3)}px`,
        borderRadius: theme.borderRadius,
        cursor: 'pointer',
        userSelect: 'none',
        display: 'inline-block',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: theme.colors.text,
        opacity: 0.5,
        '&:hover': {
          background: theme.colors.neutrals[0],
          opacity: 1,
        },
        transition: 'all 0.2s',
        '& > *': { verticalAlign: 'middle' },
      },
      active && {
        opacity: 1,
        backgroundColor: `${theme.colors.primary} !important`,
        color: theme.colors.backgrounds[0],
      },
      disabled && {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.25,
      },
    ]}
    {...props}
  />
)

export default observer(PagerItem)
