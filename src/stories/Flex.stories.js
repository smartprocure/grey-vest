import React from 'react'
import _ from 'lodash/fp'
import { Flex, Text, Box } from '..'
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
      {_.times(
        i => (
          <div>Item{i + 1}</div>
        ),
        6
      )}
    </Flex>
  </Flex>
)

export let noChildren = () => (
  <Flex column alignItems="center">
    <Flex />
  </Flex>
)

export let gap = () => (
  <>
    <Text>hello</Text>
    <Flex wrap gap={2} as={Box}>
      {_.times(
        () => (
          <div
            style={{
              backgroundColor: 'cyan',
              height: 30,
              width: _.random(10, 100),
            }}
          />
        ),
        40
      )}
    </Flex>
    <Text>goodbye</Text>
  </>
)

export let columnGap = () => (
  <Flex column gap={2} style={{ backgroundColor: 'yellow' }}>
    {_.times(
      () => (
        <div
          style={{
            background: 'cyan',
            height: _.random(10, 30),
            width: _.random(50, 200),
          }}
        />
      ),
      6
    )}
  </Flex>
)
