import React from 'react'
import _ from 'lodash/fp'
import { Button, ButtonGroup, Grid } from '..'
import decorator from './decorator'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [decorator],
}

export let story = () => {
  let listButtons = Component =>
    _.map(n => <Component>{n}</Component>, ['One', 'Two', 'Three', 'Four'])
  return (
    <Grid inline gap={2}>
      <ButtonGroup>{listButtons(Button)}</ButtonGroup>
      <ButtonGroup>{listButtons(Button.Primary)}</ButtonGroup>
      <ButtonGroup>{listButtons(Button.Tertiary)}</ButtonGroup>
      <ButtonGroup>{listButtons(Button.Danger)}</ButtonGroup>
      <ButtonGroup>{listButtons(Button.Ghost)}</ButtonGroup>
    </Grid>
  )
}
