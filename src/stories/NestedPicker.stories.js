import React from 'react'
import { action } from '@storybook/addon-actions'
import { NestedPicker } from '..'

export default { title: 'NestedPicker', component: NestedPicker }

export let story = () => (
  <NestedPicker
    options={['abcd', 'bcde', 'cdef'].map(x => ({ label: x, value: x }))}
    onChange={action(`picked`)}
  />
)
