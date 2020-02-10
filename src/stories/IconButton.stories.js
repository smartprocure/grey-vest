import React from 'react'
import { Icon, IconButton, Flex } from '..'

export default { title: 'IconButton', component: IconButton }

export let story = () => (
  <Flex justifyContent="space-around">
    <Icon icon="more_vert" />
    <IconButton icon="more_vert" />
    <IconButton icon="more_vert" />
    <IconButton icon={() => <div>💃</div>} />
  </Flex>
)
