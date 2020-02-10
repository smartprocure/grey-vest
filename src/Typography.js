/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { getVariants } from './utils'
import theme from './theme'

let toComponent = ({ variants, ...styles }) => ({ as: As = 'span', ...props }) => (
  <As css={[styles, ...getVariants(props, variants)]} {...props} />
)

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle, Title } = _.mapValues(toComponent, theme.fonts)
export { Text, Subtitle, Title }
