/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { findKeys } from './utils'
import { fonts } from './theme'


let getVariants = (props, variants) =>
  _.flow(
    _.pick(findKeys(x => x === true, props)),
    _.values
  )(variants)

let toComponent = ({ variants, ...styles }) => ({ as: As = 'div', ...props }) => (
  <As css={[styles, ...getVariants(props, variants)]} {...props} />
)

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle, Title } = _.mapValues(toComponent, fonts)
export { Text, Subtitle, Title }
