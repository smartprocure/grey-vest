import React from 'react'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Flex, Text } from '../..'
import theme from '../../theme'
import SizeInfo from './SizeInfo'
let { fonts } = theme

export default {
  title: 'Design System | Typography / Text',
  component: Text,
  parameters: { componentSubtitle: <>Body text component with <tt>small</tt> and <tt>extraSmall</tt> variants</> },
}

let lipsum = size => loremIpsum({ size, units: 'paragraphs' })

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text} />
    <Text>Regular text. {lipsum()}</Text>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.small} />
    <Text small>
      Small text. Used for table headers and footers, field labels, dropdown
      items, small buttons, pagination, and banner copy. {lipsum()}
    </Text>
  </Flex>
)

export let extraSmallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.extraSmall} />
    <Text extraSmall>
      Extra-small text. Used for tooltips, validation messages. {lipsum()}
    </Text>
  </Flex>
)

export let asParagraph = _.times(() => <Text as="p">{lipsum()}</Text>, 3)

export let weightAndItalicsVariants = () => (
  <Flex column gap="md">
    <Text bold>{lipsum()}</Text>
    <Text italic>{lipsum()}</Text>
  </Flex>
)
