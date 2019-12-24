import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { Grid, Flex, Title } from '../..'
import { fonts } from '../../config'
import decorator from '../decorator'
import SizeInfo from './SizeInfo'

export default {
  title: 'Typography | Title',
  decorators: [decorator],
  component: Title,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title} />
    <Title>Regular title. Used for page headers. Morbi sodales ipsum sapien, eget condimentum lorem pharetra non.</Title>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title.variants.large} />
    <Title large>Large title. Used for extra-large callouts. Integer et vestibulum mi.</Title>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title.variants.small} />
    <Title small>
      Small title. Used for modal headers and tab titles. Sed ornare bibendum
      nisl, sit amet finibus orci blandit eget. Sed rhoncus, tellus in maximus
      blandit, sapien enim suscipit nisl, sed eleifend sapien velit id nulla.
    </Title>
  </Flex>
)
