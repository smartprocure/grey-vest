import { DocsPage } from '@storybook/addon-docs/blocks'
import { configure, addParameters, addDecorator } from '@storybook/react'
import _ from 'lodash/fp'
import React from 'react'
import Fonts from '../src/Fonts'
import { convertProps } from './utils'

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
// of our components (generally on account of HOC wrappers like mobx's observer).
addParameters({
  docs: {
    page: () => (
      <DocsPage
        propsSlot={({ parameters: { props = {}, propSections } }) => ({
          rows: convertProps(props),
          ...(propSections && {
            sections: _.mapValues(convertProps, propSections),
          }),
        })}
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
