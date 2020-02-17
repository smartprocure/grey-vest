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
  <Flex wrap gap="lg" justifyContent="space-around">
    <SwatchSet colors={colors.primary} title="primary" />
    <SwatchSet colors={colors.secondary} title="secondary" />
    <SwatchSet colors={colors.text} title="text" />
    <SwatchSet colors={colors.backgrounds} title="backgrounds" />
    <SwatchSet colors={colors.neutrals} title="neutrals" />
    <SwatchSet colors={colors.warning} title="warning" />
    <SwatchSet colors={colors.info} title="info" />
    <SwatchSet colors={colors.error} title="error" />
    <SwatchSet colors={colors.success} title="success" />
    <SwatchSet colors={_.values(colors.pastels)} title="pastels" />
  </Flex>
)
