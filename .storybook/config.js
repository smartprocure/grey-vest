import _ from 'lodash/fp'
import F from 'futil'
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

let convertType = F.unless(
  _.overEvery(_.isObject, _.has('summary')),
  summary => ({ summary })
)

let convertTypes = F.expandObject(
  _.flow(
    _.pick(['type', 'defaultValue']),
    _.mapValues(convertType)
  )
)

let convertProps = _.flow(
  F.unless(_.isArray, F.unkeyBy('name')),
  _.map(convertTypes)
)

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
