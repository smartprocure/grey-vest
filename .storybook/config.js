import { configure, addDecorator } from '@storybook/react'
import Fonts from '../src/Fonts'
import React from 'react'

addDecorator(Story => (
  <>
    <Fonts />
    <Story />
  </>
))

configure(
  require.context(
    '../src',
    true,
    /^((?![\\/]node_modules[\\/]).)*\.stories\.(js|mdx)$/
  ),
  module
)
