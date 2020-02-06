/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'
import GridItem from './GridItem'
import { renameProps } from 'recompose'

let Divider = ({ vertical = false, margin = 1, ...props }) => (
  <GridItem
  place={vertical ? "stretch center" : "center stretch"}
    css={[
      {
        backgroundColor: theme.colors.neutrals[0],
      },
      vertical
        ? {
            width: 1,
            marginLeft: theme.space(margin),
            marginRight: theme.space(margin),
          }
        : {
            height: 1,
            marginTop: theme.space(margin),
            marginBottom: theme.space(margin),
          },
    ]}
    {...props}
  />
)

export default renameProps({ m: 'margin' })(Divider)
