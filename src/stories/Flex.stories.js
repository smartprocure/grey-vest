import React from 'react'
import { Flex } from '..'
import decorator from './decorator'

export default {
  title: 'Flex',
  component: Flex,
  decorators: [decorator],
}

export let asButton = () => (
  <Flex column alignItems="center">
    <Flex
      as="button"
      wrap
      justifyContent="center"
      style={{
        backgroundColor: 'lightblue',
        fontSize: '2em',
        maxWidth: 300,
      }}
    >
      <div>Item1</div>
      <div>Item2</div>
      <div>Item2</div>
      <div>Item4</div>
      <div>Item5</div>
      <div>Item6</div>
    </Flex>
  </Flex>
)

export let noChildren = () => (
  <Flex column alignItems="center">
    <Flex />
  </Flex>
)
