import { configure, addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/client-api'
import { DocsPage } from '@storybook/addon-docs/blocks'
import Fonts from '../src/Fonts'
import React from 'react'

addDecorator(Story => (
  <>
    <Fonts />
    <Story />
  </>
))

addParameters({
  docs: {
    page: () => (
      <DocsPage
        propsSlot={({ parameters: { props = { rows: [] } } }) => props}
      />
    ),
    extractComponentDescription: (target, { info }) => info,
  },
})

configure(
  require.context(
    '../src',
    true,
    /^((?![\\/]node_modules[\\/]).)*\.stories\.(js|mdx)$/
  ),
  module
)
