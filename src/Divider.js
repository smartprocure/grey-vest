/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'

let Divider = ({ vertical = false, m = 1 }) => (
  <div
    css={[
      {
        backgroundColor: theme.colors.neutrals[3],
      },
      vertical
        ? {
            width: 1,
            marginLeft: theme.space(m),
            marginRight: theme.space(m),
          }
        : {
            height: 1,
            marginTop: theme.space(m),
            marginBottom: theme.space(m),
          },
    ]}
  />
)

export default Divider
