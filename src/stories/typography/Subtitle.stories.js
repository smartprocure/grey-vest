import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
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
      Regular subtitle. Used for buttons and navigation elements. {loremIpsum()}
    </Subtitle>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={theme.fonts.Subtitle.variants.large} />
    <Subtitle large>
      Large subtitle. Used for section headers, subsections within pages, and
      large buttons. {loremIpsum()}
    </Subtitle>
  </Flex>
)
