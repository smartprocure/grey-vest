import React from 'react'
import { Icon, Flex, Button } from '..'
import { flag } from './commonProps'

let props = {
  rows: [
    {
      name: 'icon',
      description:
        'Accepts a [Material-UI icon ID](https://material.io/resources/icons/) or a React component',
      type: { summary: 'string | Component' },
    },
    { name: 'small', ...flag },
    { name: 'large', ...flag },
  ],
}
export default { title: 'Icon', component: Icon, parameters: { props } }

export let story = () => <Icon icon="weekend" />

export let customIcons = () => (
  <Flex justifyContent="space-evenly" alignItems="center">
    <Icon icon={() => '💃'} />
    <Icon icon={<Button compact>fancy</Button>} />
    <Icon
      icon={
        <Button compact icon={() => '💃'}>
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