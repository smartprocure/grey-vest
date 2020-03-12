import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { Select, Divider } from '..'
import { lipsum, optionsFromArray } from './utils'

let props = {
  value: {
    type: 'any',
    description:
      'Matches the `value` property of the selected option. Can be any type, but should be shallow-comparable.',
  },
  options: {
    type: {
      summary: 'Option[]',
      detail: 'type Option = { label: string, value: any, disabled?: boolean }',
    },
    defaultValue: '[]',
  },
  onChange: {
    type: { summary: 'function', detail: '(value: any) => void' },
    description: 'Called with the value of the selected option',
  },
}
export default { title: 'Select', component: Select, parameters: { props } }

let options = optionsFromArray(_.times(lipsum, 5))

export let usage = () => {
  let [value, setValue] = React.useState('lizard')
  return (
    <div style={{ height: 240 }}>
      Selected: <b>{value}</b>
      <Divider />
      <Select
        value={value}
        onChange={setValue}
        options={[
          { label: '😂', value: 'joy' },
          { label: '🦎', value: 'lizard' },
          { label: '🌞', value: 'sun_with_face' },
          { label: '👻', value: 'ghost' },
          { label: '🍆', value: 'eggplant' },
        ]}
      />
    </div>
  )
}

export let withDomLens = () => {
  let selected = React.useState(1)
  return (
    <div style={{ height: 360 }}>
      Selected: <b>{F.view(selected)}</b>
      <Divider />
      <Select {...F.domLens.value(selected)} options={options} />
    </div>
  )
}
withDomLens.story = {
  parameters: {
    docs: {
      storyDescription: `
[\`F.domLens.value\`](https://github.com/smartprocure/futil-js#domlensvalue)
takes any valid [futil](https://github.com/smartprocure/futil-js) lens format
(such as the \`[value, setter]\` array returned from React state) and returns a
\`value\`/\`onChange\` object that can be spread onto a component.
`,
    },
  },
}

export let noOptions = () => <Select options={[]} />

export let native = () => {
  let [value, setValue] = React.useState(1)
  return (
    <>
      Selected: <b>{value}</b>
      <Divider />
      <Select native value={value} onChange={setValue} options={options} />
    </>
  )
}

export let disabled = () => {
  let [selected, setSelected] = React.useState(0)
  return (
    <div style={{ height: 360 }}>
      Selected: <b>{selected}</b>
      <Divider />
      <Select
        value={selected}
        onChange={setSelected}
        options={_.map(_.set('disabled', true), options)}
      />
    </div>
  )
}
