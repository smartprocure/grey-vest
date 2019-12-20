import React from 'react'
import { Checkbox } from '..'
import decorator from './decorator'

export default {
  title: 'Components|Checkbox',
  decorators: [decorator],
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Handy status label',
    notes: 'test',
  },
}

export let unchecked = () => <Checkbox />
export let checked = () => <Checkbox checked />
