/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'
import { withAliasProps } from './utils'

let Divider = ({ vertical = false, margin = 1 }) => (
  <div
    css={[
      {
        backgroundColor: theme.colors.neutrals[3],
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
  />
)

export default withAliasProps({ m: 'margin' })(Divider)
