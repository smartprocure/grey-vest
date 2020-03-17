import React from 'react'
import { Checkbox } from '..'
import { setDescription, setName } from './utils'
import F from 'futil'

let props = {
  checked: { type: 'boolean' },
  onChange: {
    type: {
      summary: 'function',
      detail: '(checked: boolean) => void',
    },
  },
  label: {
    type: 'string',
    description:
      'Optional; if this is omitted, only the checkbox is rendered. Clicking the label toggles the checkbox state.',
  },
  disabled: { type: 'boolean', defaultValue: 'false' },
}

export default { title: 'Checkbox', component: Checkbox, parameters: { props } }

export let baseUsage = () => {
  let [checked, setChecked] = React.useState(true)
  return <Checkbox checked={checked} onChange={setChecked} label="Check me!" />
}

export let withDomLens = () => {
  let checkedLens = React.useState(false)
  return (
    <Checkbox
      {...F.domLens.binding('checked')(checkedLens)}
      label="Check me!"
    />
  )
}
setName(withDomLens, 'With domLens')
setDescription(
  withDomLens,
  `
Demonstrats how to use futil's \`domLens\` to bind Checkbox's \`checked\` and
\`onChange\` control props to React state.
`
)

export let noLabel = () => {
  let [checked, setChecked] = React.useState(true)
  return <Checkbox checked={checked} onChange={setChecked} />
}

export let disabled = () => {
  let [checked, setChecked] = React.useState(true)
  return (
    <Checkbox
      disabled
      checked={checked}
      onChange={setChecked}
      label="Disabled label"
    />
  )
}
setDescription(
  disabled,
  `
A disabled checkbox should not handle change events. We attach state to the
checkbox in this story to confirm that it will *not* be updated.
`
)
