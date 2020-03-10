/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import _ from 'lodash/fp'
import { getVariants, omitKeysFrom } from './utils'
import theme from './theme'

let modifiers = {
  bold: { fontWeight: 600 },
  normal: { fontWeight: 400 },
  italic: { fontStyle: 'italic' },
}

let toComponent = ({ variants, ...styles }) =>
  forwardRef(({ as: As = 'span', ...props }, ref) => (
    <As
      css={[styles, ...getVariants(props, { ...variants, ...modifiers })]}
      {...{ ref, ...omitKeysFrom([variants, modifiers], props) }}
    />
  ))

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle, Title } = _.mapValues(toComponent, theme.fonts)
export { Text, Subtitle, Title }
