import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import theme from '../theme'
import decorator from './decorator'
import { Flex, Title, Text } from '..'

let Swatch = ({ color, size = 120 }) => (
  <Flex inline column alignItems="center" style={{ margin: 8 }}>
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
    <Text>{color}</Text>
  </Flex>
)

export default {
  title: 'Design System | Colors',
  decorators: [decorator],
}

export let Colors = () =>
  F.mapIndexed(
    (value, key) => (
      <div>
        <Title style={{ marginTop: 32, marginBottom: 8, marginLeft: 8 }}>
          {_.startCase(key)}
        </Title>
        <div>
          {_.map(
            color => (
              <Swatch color={color} key={color} />
            ),
            _.castArray(value)
          )}
        </div>
      </div>
    ),
    theme.colors
  )
