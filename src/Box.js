/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { forwardRef } from 'react'
import { padding as pad } from 'polished'
import { getVariants, coalesce } from './utils'
import theme from './theme'

let Box = (
  { as: As = 'div', padding = 2, paddingX, paddingY, ...props },
  ref
) => (
  <As
    css={{
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.backgrounds[0],
      boxShadow: getVariants(props, theme.boxShadows, 'normal'),
      ..._.flow(
        F.flowMap(coalesce, theme.space),
        _.apply(pad)
      )([
        [paddingY, _.head(padding), padding],
        [paddingX, _.last(padding), padding],
      ]),
    }}
    {...{ ref, ...props }}
  />
)

export default forwardRef(Box)
