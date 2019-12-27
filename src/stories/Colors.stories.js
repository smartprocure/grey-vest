import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
// import { colors } from '../theme'
import decorator from './decorator'
import { Flex, Title, Text } from '..'
import { useTheme } from 'emotion-theming'

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
  title: 'Colors',
  decorators: [decorator],
}

export let Colors = () => {
  let { colors } = useTheme()
  return F.mapIndexed(
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
    colors
  )
}