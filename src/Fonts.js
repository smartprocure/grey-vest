import React from 'react'
import { Global } from '@emotion/core'
import theme from './theme'

let Fonts = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
      rel="stylesheet"
    />
    <Global
      styles={{
        body: { ...theme.fonts.Text, color: theme.colors.text },
      }}
    />
  </>
)
export default Fonts
