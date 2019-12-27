import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { Grid, Flex, Text } from '../..'
import { fonts } from '../../Typography'
import decorator from '../decorator'
import SizeInfo from './SizeInfo'

export default {
  title: 'Typography | Text',
  decorators: [decorator],
  component: Text,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text} />
    <Text>Regular text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.</Text>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.small} />
    <Text size="small">
      Small text. Used for table headers and footers, field labels, dropdown
      items, compact buttons, pagination, and banner copy.
    </Text>
  </Flex>
)

export let extraSmallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.extraSmall} />
    <Text size="extraSmall">
      Extra-small text. Used for tooltips, validation messages. Neque porro
      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
      velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </Text>
  </Flex>
)
