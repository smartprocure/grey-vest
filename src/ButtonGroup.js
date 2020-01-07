import styled from '@emotion/styled'
import { defaultProps } from 'recompose'
import Flex from './Flex'
import theme from './theme'

let borderRadius = `${theme.borderRadius}px !important`

let ButtonGroup = styled(defaultProps({ inline: true })(Flex))({
  '& > *': {
    borderRadius: '0 !important',
  },
  '& > *:first-child': {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  '& > *:last-child': {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
})
export default ButtonGroup
