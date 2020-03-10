/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { forwardRef } from 'react'
import { padding as pad } from 'polished'
import { getVariants, coalesce } from './utils'
import theme from './theme'

let Box = (
  { as: As = 'div', padding = 'md', paddingX, paddingY, ...props },
  ref
) => (
  <As
    css={{
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.backgrounds[0],
      boxShadow: getVariants(props, theme.boxShadows, 'normal'),
      ..._.flow(
        F.flowMap(coalesce, F.aliasIn(theme.spaces)),
        _.apply(pad)
      )([
        [paddingY, _.head(_.castArray(padding))],
        [paddingX, _.last(_.castArray(padding))],
      ]),
    }}
    {...{ ref, ..._.omit(_.keys(theme.boxShadows), props) }}
  />
)

export default forwardRef(Box)
