import React from 'react'
import { Fonts } from '..'
import ThemeProvider from '../ThemeProvider'

export default Story => (
  <ThemeProvider>
    <Fonts />
    <Story />
  </ThemeProvider>
)
