import React from 'react'
import _ from 'lodash/fp'
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
      {_.map(
        i => (
          <div>Item{i}</div>
        ),
        _.range(1, 7)
      )}
    </Flex>
  </Flex>
)

export let noChildren = () => (
  <Flex column alignItems="center">
    <Flex />
  </Flex>
)
