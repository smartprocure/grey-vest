import React from 'react'
import { Flex, Title } from '../..'
import theme from '../../theme'
import SizeInfo from './SizeInfo'
import { lipsum } from '../utils'
let { fonts } = theme

export default {
  title: 'Design System | Typography / Title',
  component: Title,
  parameters: { componentSubtitle: <>Header text component with <tt>large</tt> and <tt>small</tt> variants</> },
}

export let regular = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title} />
    <Title>Regular title. Used for page headers. {lipsum()}</Title>
  </Flex>
)

export let largeVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title.variants.large} />
    <Title large>Large title. Used for extra-large callouts. {lipsum()}</Title>
  </Flex>
)

export let smallVariant = () => (
  <Flex alignItems="center">
    <SizeInfo config={fonts.Title.variants.small} />
    <Title small>
      Small title. Used for modal headers and tab titles. {lipsum(2)}
    </Title>
  </Flex>
)

export let largeAndSmallVariantsSimultaneously = () => (
  <>
    <Title small large>
      Using multiple variants is possible, but can lead to unusual behavior.
    </Title>
    <Title large small>
      When multiple variant flags are passed to a GreyVest component, the
      component takes on all of the styles associated with any of those
      variants. Where the variants conflict with each other (in this case, for
      example, with font size and line height), the last-given variant takes
      precedence.
    </Title>
  </>
)
