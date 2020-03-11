import React from 'react'
import F from 'futil'
import { action } from '@storybook/addon-actions'
import { Button, Grid, Flex } from '..'
import { flag, asProp } from './commonProps'

let flagProps = F.arrayToObject(x => x, () => flag)

let propSections = {
  'size flags': flagProps(['small', 'large']),
  'color flags': flagProps(['primary', 'secondary', 'danger', 'ghost']),
  other: {
    onClick: {
      description: 'Click handler for button',
      type: 'function',
      defaultValue: '() => void',
    },
    icon: {
      description: "supports the same values as Icon's `icon` prop",
      type: 'string | Component',
    },
    as: { ...asProp, defaultValue: `'button'` },
  },
}

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'With five color variations and three sizes',
    propSections,
  },
}

let clickAction = () => action('clicked')()

let Container = ({ cols = 3, ...props }) => (
  <Grid
    gap="md"
    columns={`repeat(${cols}, auto)`}
    placeItems="baseline"
    {...props}
  />
)

export let regular = () => (
  <Container>
    <Button onClick={clickAction}>Regular Button</Button>
    <Button large onClick={clickAction}>
      Large Button
    </Button>
    <Button small onClick={clickAction}>
      Compact Button
    </Button>
  </Container>
)

export let primary = () => (
  <Container>
    <Button primary>Regular</Button>
    <Button primary large>
      Large
    </Button>
    <Button primary small>
      Compact
    </Button>
  </Container>
)

export let secondary = () => (
  <Container>
    <Button secondary>Regular</Button>
    <Button secondary large>
      Large
    </Button>
    <Button secondary small>
      Compact
    </Button>
  </Container>
)

export let danger = () => (
  <Container>
    <Button danger>Regular</Button>
    <Button danger large>
      Large
    </Button>
    <Button danger small>
      Compact
    </Button>
  </Container>
)

export let ghost = () => (
  <Container>
    <Button ghost>Regular</Button>
    <Button ghost large>
      Large
    </Button>
    <Button ghost small>
      Compact
    </Button>
  </Container>
)

export let success = () => (
  <Container>
    <Button success>Regular</Button>
    <Button success large>
      Large
    </Button>
    <Button success small>
      Compact
    </Button>
  </Container>
)

export let info = () => (
  <Container>
    <Button info>Regular</Button>
    <Button info large>
      Large
    </Button>
    <Button info small>
      Compact
    </Button>
  </Container>
)

export let disabled = () => (
  <Container cols={4}>
    <Button disabled>plain</Button>
    <Button primary disabled>
      primary
    </Button>
    <Button secondary disabled>
      secondary
    </Button>
    <Button danger disabled>
      danger
    </Button>
  </Container>
)

export let withIcon = () => {
  let IconDemo = props => (
    <Flex inline column gap="sm" alignItems="flex-start">
      <Button {...props} icon="keyboard_arrow_down">
        Dropdown
      </Button>
      <Button {...props} icon="free_breakfast">
        Other
      </Button>
    </Flex>
  )
  return (
    <Container cols={3}>
      <IconDemo />
      <IconDemo large />
      <IconDemo small />
    </Container>
  )
}

export let asDiv = () => <Button as="div">Click</Button>
