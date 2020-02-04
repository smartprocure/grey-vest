import { configure, addParameters, addDecorator } from '@storybook/react'
import { DocsPage } from '@storybook/addon-docs/blocks'
import Fonts from '../src/Fonts'
import React from 'react'

addDecorator(Story => (
  <>
    <Fonts />
    <Story />
  </>
))

// DocsPage's propsSlot supplies the data for its Props component, and extractComponentDescription
// does the same for the Description slot. This customization tells storybook to pull data from
// `parameters.props` for props and `parameters.info` for the description, rather than from JSDoc.
// We do it this way because Storybook's PropTypes/JSDoc parser doesn't work very well with most
// of our components.
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
