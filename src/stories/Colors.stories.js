import React from 'react'
import _ from 'lodash/fp'
import theme from '../theme'
import { Flex, Title, Text } from '..'
let { colors } = theme

export default { title: 'Design System | Colors' }

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

let SwatchSet = ({ title, colors }) => (
  <div>
    <Title style={{ marginTop: 32, marginBottom: 8, marginLeft: 8 }}>
      {_.startCase(title)}
    </Title>
    <div>
      {_.map(
        color => (
          <Swatch color={color} key={color} />
        ),
        _.castArray(colors)
      )}
    </div>
  </div>
)

export let story = () => (
  <Flex wrap gap={4} justifyContent="space-around">
    <SwatchSet colors={[colors.primary]} title="primary" />
    <SwatchSet colors={[colors.secondaryLight, colors.secondary]} title="secondaries" />
    <SwatchSet colors={[colors.text]} title="text" />
    <SwatchSet colors={[colors.neutrals[0], colors.neutrals[1]]} title="backgrounds" />
    <SwatchSet colors={[colors.neutrals[4], colors.neutrals[5], colors.neutrals[6]]} title="neutrals" />
    <SwatchSet colors={[colors.warning]} title="warning" />
    <SwatchSet colors={[colors.infos[0], colors.infos[1]]} title="info" />
    <SwatchSet colors={[colors.error]} title="error" />
    <SwatchSet colors={colors.successes} title="successes" />
  </Flex>
)
