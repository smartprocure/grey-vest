import React from 'react'
import { Box } from '..'
import decorator from './decorator'

export default {
  title: 'Components|Box',
  decorators: [decorator],
  component: Box,
  descriptionSlot: () => 'box description',
}

export let story = () => <Box>Box Contents</Box>
