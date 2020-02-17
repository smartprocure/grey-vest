/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import { margin as getMargin } from 'polished'
import theme from './theme'
import GridItem from './GridItem'

let Divider = ({ vertical = false, margin = 'sm', ...props }) => (
  <GridItem
    place={vertical ? 'stretch center' : 'center stretch'}
    css={[
      {
        backgroundColor: theme.colors.neutrals[0],
      },
      vertical
        ? {
            width: 1,
            ...getMargin(0, F.alias(margin, theme.spaces)),
          }
        : {
            height: 1,
            ...getMargin(F.alias(margin, theme.spaces), 0),
          },
    ]}
    {...props}
  />
)

export default Divider
