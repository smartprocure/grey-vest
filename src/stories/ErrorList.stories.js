import React from 'react'
import { Flex, Box, ErrorList, TextInput, Title, Text } from '..'

export default { title: 'ErrorList', component: ErrorList }

export let formDemo = () => (
  <Box>
    <Title>Header</Title>
    <ErrorList block>Block error</ErrorList>
    <Flex column>
      <Flex as="label" column style={{ flex: 1 }}>
        <Text>Label</Text>
        <TextInput error />
      </Flex>
      <ErrorList>Text error</ErrorList>
    </Flex>
  </Box>
)
export let text = () => (
  <ErrorList>
    Type <b>nodetype</b> is not supported (for key <i>nodekey</i>)
  </ErrorList>
)
export let block = () => (
  <ErrorList block>
    {['Error 1', 'Error 2', ['Error 3A', 'Error 3B']]}
  </ErrorList>
)
