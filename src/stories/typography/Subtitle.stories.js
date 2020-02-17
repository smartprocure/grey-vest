import React from 'react'
import { lipsum } from '../utils'
import { Flex, Subtitle } from '../..'
import theme from '../../theme'
import SizeInfo from './SizeInfo'

export default {
  title: 'Design System | Typography / Subtitle',
  component: Subtitle,
  parameters: { componentSubtitle: <>Uppercase text component with wide letter-spacing and a <tt>large</tt> variant</> },
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={theme.fonts.Subtitle} />
    <Subtitle>
      Regular subtitle. Used for buttons and navigation elements. {lipsum()}
    </Subtitle>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={theme.fonts.Subtitle.variants.large} />
    <Subtitle large>
      Large subtitle. Used for section headers, subsections within pages, and
      large buttons. {lipsum()}
    </Subtitle>
  </Flex>
)

export let weightAndItalicsVariants = () => (
  <Flex column gap={2}>
    <Subtitle normal>{lipsum()}</Subtitle>
    <Subtitle italic>{lipsum()}</Subtitle>
  </Flex>
)
