import { fonts } from '../config'
import { Grid, Flex } from '..'
import _ from 'lodash/fp'
import F from 'futil'
import decorator from '../stories/decorator'
import { Title, Text } from '.'
import React from 'react'

export default {
  title: 'GreyVest Library | Typography / Title',
  decorators: [decorator],
  component: Title,
}

let SizeInfo = ({ config }) => (
  <div style={{ width: 64, paddingRight: 16, alignSelf: 'center' }}>
    <Text>
      {config.fontSize} / {config.lineHeight * config.fontSize}
    </Text>
  </div>
)

export let regular = () => (
  <Flex>
    <SizeInfo config={fonts.Title} />
    <Title>Regular title. Lorem ipsum dolor sit amet.</Title>
  </Flex>
)

export let largeVariant = () => (
  <Flex>
    <SizeInfo config={fonts.Title.variants.large} />
    <Title large>Large title. Lorem ipsum dolor sit amet.</Title>
  </Flex>
)
