import React from 'react'
import { Icon, Flex } from '..'

export default { title: 'Icon', component: Icon }

export let story = () => <Icon icon="weekend" />

export let customIcon = () => <Icon icon={() => <div>💃</div>} />

export let sizes = () => (
  <Flex justifyContent="space-evenly" alignItems="center">
    <Icon icon="more_vert" small />
    <Icon icon="more_vert" />
    <Icon icon="more_vert" large />
  </Flex>
)
