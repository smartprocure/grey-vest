import React from 'react'
import { Textarea } from '..'
import F from 'futil'
import decorator from './decorator'

export default {
  title: 'Textarea',
  decorators: [decorator],
  component: Textarea,
}

export let baseUsage = () => <Textarea placeholder="Enter some text..." />

export let disabled = () => <Textarea disabled placeholder="I am disabled with a placeholder" />

export let disabledWithValue = () => <Textarea disabled value="I am disabled with a value" />
