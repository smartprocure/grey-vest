import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import _ from 'lodash/fp'
import Flex from './Flex'
import Box from './Box'
import Icon from './Icon'
import { Text } from './Typography'
import theme from './theme'

let ErrorText = styled(Text)({ color: theme.colors.errors[1] })

let ErrorBlock = ({ children, ...props }) => (
  <Flex
    as={Box}
    px={1.5}
    py={1}
    gap={1}
    alignItems="center"
    css={{
      color: theme.colors.errors[1],
      backgroundColor: `${theme.colors.errors[3]}7F`,
    }}
    {...props}
  >
    <Icon icon="warning" />
    {F.mapIndexed(
      (child, i) => (
        <ErrorText key={i}>{child}</ErrorText>
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
