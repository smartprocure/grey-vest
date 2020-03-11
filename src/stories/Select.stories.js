import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { Select, Grid } from '..'
import { lipsum, optionsFromArray } from './utils'

let props = [
  { name: 'value' },
  {
    name: 'options',
    type: {
      summary: 'Array<{ label: string, value: any, disabled: boolean }>',
    },
  },
  {
    name: 'onChange',
    type: { summary: '(value: any) => any' },
    description: 'Called with the value of the selected option',
  },
]
export default { title: 'Select', component: Select, parameters: { props } }

let options = optionsFromArray(_.times(lipsum, 5))

export let usage = () => {
  let [value, setValue] = React.useState(1)
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>{value}</b>
      </div>
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
    </Grid>
  )
}

export let withDomLens = () => {
  let selected = React.useState(1)
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>{F.view(selected)}</b>
      </div>
      <Select {...F.domLens.value(selected)} options={options} />
    </Grid>
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

export let shortOptions = () => (
  <Select options={optionsFromArray(_.times(() => lipsum(1, 'words'), 8))} />
)

export let noOptions = () => <Select options={[]} />

export let native = () => {
  let selected = React.useState(1)
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>{F.view(selected)}</b>
      </div>
      <Select native {...F.domLens.value(selected)} options={options} />
    </Grid>
  )
}

export let disabled = () => <Select options={options} disabled />
