/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import _ from 'lodash/fp'
import { rgba } from 'polished'
import Flex from './Flex'
import Box from './Box'
import Icon from './Icon'
import { Text } from './Typography'
import theme from './theme'

let ErrorText = props => <Text css={{ color: theme.colors.error }} {...props} />

let ErrorBlock = ({ children, ...props }) => (
  <Flex
    as={Box}
    px={1.5}
    py={1}
    gap={1}
    alignItems="center"
    css={{
      color: theme.colors.error,
      backgroundColor: rgba(theme.colors.error, 0.2),
    }}
    {...props}
  >
    <Icon icon="warning" />
    {F.mapIndexed(
      (child, i) => (
        <Text key={i}>{child}</Text>
      ),
      _.castArray(children)
    )}
  </Flex>
)

let ErrorList = ({ children, block = false, ...props }) => {
  let Component = block ? ErrorBlock : ErrorText
  return <Component {...props}>{children}</Component>
}

export default ErrorList
