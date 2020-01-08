/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import _ from 'lodash/fp'
import F from 'futil'
import { setDisplayName, renameProps } from 'recompose'
import { coalesce, withAliasProps } from './utils'
import theme from './theme'

let Box = _.flow(
  setDisplayName('Box'),
  renameProps({ padding: 'p', paddingX: 'px', paddingY: 'py' })
)(({ as: As = 'div', p = 2, px, py, ...props }) => (
  <As
    css={{
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.neutrals[0],
      boxShadow: theme.boxShadows.normal,
      padding: _.flow(
        F.flowMap(theme.space, F.append('px')),
        _.join(' ')
      )([coalesce([py, p]), coalesce([px, p])]),
    }}
    {...props}
  />
))

F.extendOn(
  Box,
  F.arrayToObject(
    _.capitalize,
    variant => styled(Box)({ boxShadow: theme.boxShadows[variant] }),
    ['popup', 'modal']
  )
)

export default Box
