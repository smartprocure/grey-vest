import React from 'react'
import { Box, Grid } from '..'
import _ from 'lodash/fp'
import F from 'futil'
import decorator from './decorator'
import theme from '../theme'

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

export let controlledPadding = () => (
  <Grid gap={3}>
    {F.mapIndexed(
      (value, i) => (
        <Box p={i}>{value}px padding</Box>
      ),
      theme.spaces
    )}
  </Grid>
)
