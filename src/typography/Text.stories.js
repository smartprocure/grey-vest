import { fonts } from '../config'
import { Grid, Flex } from '..'
import _ from 'lodash/fp'
import F from 'futil'
import decorator from '../stories/decorator'
import { Text } from '.'
import React from 'react'
import { SizeInfo } from './util'

export default {
  title: 'GreyVest Library | Typography / Text',
  decorators: [decorator],
  component: Text,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text} />
    <Text>
      Regular text. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </Text>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.small} />
    <div>
      <Text small as="p">
        Small text. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </Text>
      <Text small as="p">
        Used for table headers and footers, field labels, dropdown items,
        compact buttons, pagination, and banner copy.
      </Text>
    </div>
  </Flex>
)

export let extraSmallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Text.variants.extraSmall} />
    <Text extraSmall>
      Extra-small text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </Text>
  </Flex>
)
