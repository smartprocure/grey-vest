/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import _ from 'lodash/fp'
import F from 'futil'
import { coalesce } from './utils'
import theme from './theme'

let Box = ({ as: As = 'div', p = 2, px, py, ...props }) => (
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
)
Box.Popup = styled(Box)({ boxShadow: theme.boxShadows.popup })
Box.Modal = styled(Box)({ boxShadow: theme.boxShadows.modal })

export default Box
