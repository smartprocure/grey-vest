import React from 'react'
import { Fonts, Style } from '..'
import ThemeProvider from '../ThemeProvider'

export default Story => (
  <ThemeProvider>
    <Fonts />
    <Style />
    <Story />
  </ThemeProvider>
)
