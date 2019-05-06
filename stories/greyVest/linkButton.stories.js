import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { LinkButton, Fonts, GVStyle } from './../../src/themes/greyVest'

storiesOf('Non Search Components|Grey Vest', module).addWithJSX(
  'LinkButton',
  () => (
    <div>
      <Fonts />
      <GVStyle />
      <LinkButton onClick={() => action('clicked')()}>Click</LinkButton>
    </div>
  )
)