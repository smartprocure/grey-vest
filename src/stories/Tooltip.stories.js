import React from 'react'
import { Tooltip, DropdownItem, Button, Grid } from '..'
import decorator from './decorator'

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [decorator],
}

export let basicUsage = () => (
  <Grid gap={1} placeItems="start">
    <a data-tip="hello world">hover me</a>
    <Button data-tip="it is a button">is it a button?</Button>
    <DropdownItem
      icon="help_outline"
      data-tip={`Quisque ex tellus, egestas id massa sit amet, vestibulum iaculis libero.
      Quisque tempor ligula ac tincidunt mollis. Quisque consectetur viverra dictum. 
      In hac habitasse platea dictumst.`}
    >
      This dropdown item has a very long tooltip
    </DropdownItem>
    <Tooltip />
  </Grid>
)
