import React from 'react'
import { Tooltip, DropdownItem, Button, Grid } from '..'
import { loremIpsum } from 'lorem-ipsum'

export default { title: 'Tooltip', component: Tooltip }

export let basicUsage = () => (
  <Grid gap="sm" placeItems="start">
    <a data-tip="hello world">hover me</a>
    <Button data-tip="it is a button">is it a button?</Button>
    <DropdownItem icon="help_outline" data-tip={loremIpsum({ count: 2 })}>
      This dropdown item has a very long tooltip
    </DropdownItem>
    <Tooltip />
  </Grid>
)
