import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme'

let ThemeProvider = props => <EmotionThemeProvider theme={theme} {...props} />
export default ThemeProvider
