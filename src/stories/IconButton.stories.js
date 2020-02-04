import React from 'react'
import { Icon, TextButton, IconButton, Flex } from '..'

export default { title: 'IconButton', component: IconButton }

export let story = () => (
  <Flex justifyContent="space-around">
    <Icon icon="TableColumnMenu" />
    <Icon icon="more_vert" />
    <TextButton>
      <Icon icon="more_vert" />
    </TextButton>
    <IconButton icon="more_vert" />
    <IconButton icon="TableColumnMenu" />
  </Flex>
)
