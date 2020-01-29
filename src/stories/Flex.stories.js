import React from 'react'
import _ from 'lodash/fp'
import { Flex } from '..'

export default { title: 'Flex', component: Flex }

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
  <Flex gap={2} style={{ backgroundColor: 'yellow' }}>
    {_.times(
      () => (
        <div
          style={{
            backgroundColor: 'cyan',
            height: 50,
            width: _.random(10, 100),
          }}
        />
      ),
      5
    )}
  </Flex>
)

export let wrappedGap = () => (
  <Flex wrap gap={2} style={{ backgroundColor: 'yellow' }}>
    {_.times(
      () => (
        <div
          style={{
            backgroundColor: 'cyan',
            height: 30,
            minWidth: _.random(10, 100),
            flex: 1,
          }}
        />
      ),
      40
    )}
  </Flex>
)

export let columnGap = () => (
  <Flex inline column gap={2} style={{ backgroundColor: 'yellow' }}>
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
