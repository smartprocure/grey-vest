/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { fonts } from './config'
import { findKeys } from './utils'

let getVariants = (props, variants) =>
  _.flow(
    _.pick(findKeys(_.stubTrue, props)),
    _.values
  )(variants)

let toComponent = ({ as: As = 'div', variants, ...styles }) => props => (
  <As css={[styles, ...getVariants(props, variants)]} {...props} />
)

// these have to be statically declared so they can be named exports :(
let { Text, Title, Subtitle } = _.mapValues(toComponent, fonts)
export { Text, Title, Subtitle }
