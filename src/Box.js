/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { coalesce, getVariants } from './utils'
import theme from './theme'

let Box = ({ as: As = 'div', padding = 2, paddingX, paddingY, ...props }, ref) => (
  <As
    css={{
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.backgrounds[0],
      boxShadow: getVariants(props, theme.boxShadows, 'normal'),
      padding: _.flow(
        F.flowMap(theme.space, F.append('px')),
        _.join(' ')
      )([coalesce([paddingY, padding]), coalesce([paddingX, padding])]),
    }}
    {...{ ref, ...props }}
  />
)

export default forwardRef(Box)
