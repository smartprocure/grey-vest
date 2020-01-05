import React from 'react'
import { Box, Grid, Text } from '..'
import _ from 'lodash/fp'
import decorator from './decorator'
import theme from '../theme'

export default {
  title: 'Box',
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
    <Box>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let modalBox = () => (
  <Backgrounds>
    <Box.Modal>
      <Text>Box Contents</Text>
    </Box.Modal>
  </Backgrounds>
)

export let popupBox = () => (
  <Backgrounds>
    <Box.Popup>
      <Text>Box Contents</Text>
    </Box.Popup>
  </Backgrounds>
)

export let controlledPadding = () => {
  let GreyPaddingBox = ({ children, ...props }) => (
    <Box style={{ background: 'lightgrey' }} {...props}>
      <Text style={{ background: 'white' }}>{children}</Text>
    </Box>
  )
  return (
    <Grid gap={2}>
      <GreyPaddingBox px={4}>
        horizontal padding overridden to {theme.space(4)}px
      </GreyPaddingBox>
      <GreyPaddingBox py={4}>
        vertical padding overridden to {theme.space(4)}px
      </GreyPaddingBox>
      {_.map(
        padding => (
          <GreyPaddingBox p={padding}>
            {theme.space(padding)}px padding
          </GreyPaddingBox>
        ),
        _.range(0, 5)
      )}
    </Grid>
  )
}
