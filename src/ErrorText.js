/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text } from './Typography'
import theme from './theme'

let ErrorText = props => (
  <Text as="div" css={{ color: theme.colors.error }} {...props} />
)

export default ErrorText
