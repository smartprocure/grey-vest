import styled from '@emotion/styled'
import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import Flex from './Flex'
import Icon from './Icon'
import { Text } from './Typography'
import theme from './theme'

/*
.gv-block-error {
  margin: 15px 0;
  color: #D75050;
  background-color: #D7505011;
  padding: 12px;
  border-radius: 5px;
}
*/

let ErrorText = styled(Text)({ color: theme.colors.errors[1] })

let ErrorBlock = ({ children, ...props }) => (
  <Flex alignItems="center" {...props}>
    <Icon icon="warning" />
    <div>
      <ErrorList>{children}</ErrorList>
    </div>
  </Flex>
)

let ErrorList = ({ block = false, children }) =>
  F.mapIndexed(
    (e, i) =>
      block ? (
        <ErrorBlock key={i}>{e}</ErrorBlock>
      ) : (
        <ErrorText key={i}>{e}</ErrorText>
      ),
    _.castArray(children)
  )

export default ErrorList
