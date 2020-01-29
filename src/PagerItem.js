/** @jsx jsx */
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react'
import { Text } from './Typography'
import theme from './theme'

let PagerItem = ({ active, disabled, ...props }) => (
  <Text small
    css={[
      {
        paddingLeft: theme.spaces.sm,
        paddingRight: theme.spaces.sm,
        lineHeight: `${theme.space(3)}px`,
        background: theme.colors.neutrals[0],
        borderRadius: theme.borderRadius,
        cursor: 'pointer',
        display: 'inline-block',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: theme.colors.neutrals[8],
        opacity: 0.5,
        '&:hover': {
          background: theme.colors.neutrals[4],
        },
        '& > *': { verticalAlign: 'middle' },
      },
      active && {
        opacity: 1,
        backgroundColor: theme.colors.primaries[0],
        '&:hover': { backgroundColor: theme.colors.primaries[1] },
        color: theme.colors.neutrals[0],
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
