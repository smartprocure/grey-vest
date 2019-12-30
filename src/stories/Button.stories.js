import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Grid } from '..'
import decorator from './decorator'

export default {
  title: 'Button',
  component: Button,
  decorators: [decorator],
}

let clickAction = () => action('clicked')()

let Container = ({ cols = 3, ...props }) => (
  <Grid
    gap={2}
    columns={`repeat(${cols}, auto)`}
    placeItems="baseline"
    {...props}
  />
)

export let regular = () => (
  <Container>
    <Button>Regular Button</Button>
    <Button large>Large Button</Button>
    <Button compact>Compact Button</Button>
  </Container>
)

export let primary = () => (
  <Container>
    <Button.Primary>Regular</Button.Primary>
    <Button.Primary large>Large</Button.Primary>
    <Button.Primary compact>Compact</Button.Primary>
  </Container>
)

export let secondary = () => (
  <Container>
    <Button.Secondary>Regular</Button.Secondary>
    <Button.Secondary large>Large</Button.Secondary>
    <Button.Secondary compact>Compact</Button.Secondary>
  </Container>
)
secondary.story = { name: 'Secondary (default)' }

export let tertiary = () => (
  <Container>
    <Button.Tertiary>Regular</Button.Tertiary>
    <Button.Tertiary large>Large</Button.Tertiary>
    <Button.Tertiary compact>Compact</Button.Tertiary>
  </Container>
)

export let danger = () => (
  <Container>
    <Button.Danger>Regular</Button.Danger>
    <Button.Danger large>Large</Button.Danger>
    <Button.Danger compact>Compact</Button.Danger>
  </Container>
)

export let ghost = () => (
  <Container>
    <Button.Ghost>Regular</Button.Ghost>
    <Button.Ghost large>Large</Button.Ghost>
    <Button.Ghost compact>Compact</Button.Ghost>
  </Container>
)

export let disabled = () => (
  <Container cols={4}>
    <Button.Primary disabled>Primary</Button.Primary>
    <Button.Secondary disabled>Secondary</Button.Secondary>
    <Button.Tertiary disabled>Tertiary</Button.Tertiary>
    <Button.Danger disabled>Danger</Button.Danger>
  </Container>
)

export let withIcon = () => (
  <Button icon="keyboard_arrow_right">Dropdown</Button>
)

export let asDiv = () => (
  <Button as="div" onClick={clickAction}>
    Click
  </Button>
)
