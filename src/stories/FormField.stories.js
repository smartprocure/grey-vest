import React from 'react'
import F from 'futil'
import { FormField, TextInput, RadioList, Box } from '..'

export default { title: 'FormField', component: FormField }

export let story = () => (
  <FormField
    label="Field label"
    tooltip="this is a tooltip"
    placeholder="Placeholder"
    required
    component={TextInput}
  />
)

export let radio = () => (
  <FormField
    label="Field label"
    tooltip="this is a tooltip"
    placeholder="Placeholder"
    required
    component={RadioList}
    options={F.autoLabelOptions(['red', 'blue', 'yellow', 'pink'])}
    as={Box}
    native
  />
)

export let withError = () => (
  <FormField
    label="Field label"
    placeholder="Placeholder"
    component={TextInput}
    error="This is an error message"
  />
)
