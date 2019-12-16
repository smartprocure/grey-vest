import { fonts } from '../config'
import { Grid, Flex } from '..'
import _ from 'lodash/fp'
import F from 'futil'
import decorator from '../stories/decorator'
import { Subtitle, Text } from '.'
import React from 'react'

export default {
  title: 'GreyVest Library | Typography / Subtitle',
  decorators: [decorator],
  component: Subtitle,
}

let SizeInfo = ({ config }) => (
  <div style={{ paddingRight: 16, whiteSpace: 'nowrap' }}>
    <Text>
      {config.fontSize} / {config.lineHeight * config.fontSize}
    </Text>
  </div>
)

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Subtitle} />
    <Subtitle>Regular title. Lorem ipsum dolor sit amet.</Subtitle>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Subtitle.variants.large} />
    <Subtitle large>Large title. Lorem ipsum dolor sit amet.</Subtitle>
  </Flex>
)
