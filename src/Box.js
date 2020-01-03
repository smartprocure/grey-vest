/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import theme, { withPadding } from './theme'

let Box = ({ as: As = 'div', variant = 'normal', ...props }) => (
  <As
    css={{
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.neutrals[0],
      boxShadow: _.get(variant, theme.boxShadows),
    }}
    {...props}
  />
)

export default withPadding({ p: 2 })(Box)
