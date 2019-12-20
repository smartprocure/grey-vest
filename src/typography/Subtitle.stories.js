import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { Grid, Flex } from '..'
import { fonts } from '../config'
import decorator from '../stories/decorator'
import { Subtitle, Text } from '.'
import SizeInfo from './SizeInfo'

export default {
  title: 'Typography | Subtitle',
  decorators: [decorator],
  component: Subtitle,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Subtitle} />
    <Subtitle>
      Regular subtitle. Used for buttons and navigation elements. Vestibulum
      dapibus maximus magna, id suscipit massa lobortis sit amet.
    </Subtitle>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Subtitle.variants.large} />
    <Subtitle large>
      Large subtitle. Used for section headers, subsections within pages, and
      large buttons. Cras non nulla sit amet metus facilisis lacinia at vel
      sapien.
    </Subtitle>
  </Flex>
)
