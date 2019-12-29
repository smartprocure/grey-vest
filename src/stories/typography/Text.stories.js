import React from 'react'
import { Flex, Text } from '../..'
import { fonts } from '../../Typography'
import decorator from '../decorator'
import SizeInfo from './SizeInfo'

export default {
  title: 'Design System | Typography / Text',
  decorators: [decorator],
  component: Text,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text} />
    <Text>
      Regular text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Text>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.small} />
    <Text small>
      Small text. Used for table headers and footers, field labels, dropdown
      items, compact buttons, pagination, and banner copy.
    </Text>
  </Flex>
)

export let extraSmallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.extraSmall} />
    <Text extraSmall>
      Extra-small text. Used for tooltips, validation messages. Neque porro
      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
      velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </Text>
  </Flex>
)

export let asParagraph = () => (
  <>
    <Text as="p">
      Mauris a dignissim odio, non mattis urna. Nunc sit amet pellentesque
      justo. Nulla porta, odio ac sollicitudin placerat, sem lorem accumsan
      sapien, quis accumsan lectus mauris ut lacus.
    </Text>
    <Text as="p">
      Etiam mollis odio sed auctor ultrices. Praesent egestas nisl vitae neque
      volutpat, quis porta nunc iaculis. Duis ac porttitor purus, id scelerisque
      dui.
    </Text>
    <Text as="p">
      Morbi eu rhoncus augue. Aliquam erat volutpat. Phasellus ac magna sit amet
      dolor convallis pharetra. Proin rutrum vel sapien vel bibendum. Donec
      laoreet, velit quis tincidunt sollicitudin, odio metus venenatis libero,
      dictum lobortis orci magna vitae massa.
    </Text>
  </>
)
