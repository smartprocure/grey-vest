import React from 'react'
import { Icon, Flex, Button } from '..'
import { flag } from './commonProps'

let props = {
  icon: {
    description:
      'Accepts a [Material-UI icon ID](https://material.io/resources/icons/) or a React component',
    type: 'string | Component',
  },
  small: flag,
  large: flag,
}
export default { title: 'Icon', component: Icon, parameters: { props } }

export let story = () => <Icon icon="weekend" />

export let customIcons = () => (
  <Flex justifyContent="space-evenly" alignItems="center">
    <Icon icon={() => '💃'} />
    <Icon icon={<Button small>fancy</Button>} />
    <Icon
      icon={
        <Button small icon={() => '💃'}>
          extra fancy
        </Button>
      }
    />
  </Flex>
)

export let sizes = () => (
  <Flex justifyContent="space-evenly" alignItems="center">
    <Icon icon="more_vert" small />
    <Icon icon="more_vert" />
    <Icon icon="more_vert" large />
  </Flex>
)

export let empty = () => <Icon />
