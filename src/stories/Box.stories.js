import React from 'react'
import { Box, Grid } from '..'
import _ from 'lodash/fp'
import decorator from './decorator'

export default {
  title: 'Components | Box',
  decorators: [decorator],
  component: Box,
}

let Backgrounds = ({ children }) => (
  <Grid columns={3}>
    {_.map(
      bg => (
        <div style={{ backgroundColor: bg, padding: 20 }}>{children}</div>
      ),
      ['white', 'grey', 'black']
    )}
  </Grid>
)

export let normalBox = () => (
  <Backgrounds>
    <Box>Box Contents</Box>
  </Backgrounds>
)

export let modalBox = () => (
  <Backgrounds>
    <Box variant="modal">Box Contents</Box>
  </Backgrounds>
)

export let popupBox = () => (
  <Backgrounds>
    <Box variant="popup">Box Contents</Box>
  </Backgrounds>
)
