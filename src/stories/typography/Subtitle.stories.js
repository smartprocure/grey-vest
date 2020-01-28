import React from 'react'
import { Flex, Subtitle } from '../..'
import theme from '../../theme'
import SizeInfo from './SizeInfo'

export default {
  title: 'Design System | Typography / Subtitle',
  component: Subtitle,
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={theme.fonts.Subtitle} />
    <Subtitle>
      Regular subtitle. Used for buttons and navigation elements. Vestibulum
      dapibus maximus magna, id suscipit massa lobortis sit amet.
    </Subtitle>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={theme.fonts.Subtitle.variants.large} />
    <Subtitle large>
      Large subtitle. Used for section headers, subsections within pages, and
      large buttons. Cras non nulla sit amet metus facilisis lacinia at vel
      sapien.
    </Subtitle>
  </Flex>
)
