import React from 'react'
import { IconButton, Flex } from '..'

export default { title: 'IconButton', component: IconButton }

export let story = () => <IconButton icon="mood" />

export let withCustomIcon = () => <IconButton icon={() => <div>💃</div>} />

export let sizes = () => (
  <Flex justifyContent="space-evenly" alignItems="center">
    <IconButton icon="more_vert" small />
    <IconButton icon="more_vert" />
    <IconButton icon="more_vert" large />
  </Flex>
)
