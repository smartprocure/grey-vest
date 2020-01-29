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
}

let lipsum = () => loremIpsum({ units: 'paragraphs' })

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
      items, compact buttons, pagination, and banner copy. {lipsum()}
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
