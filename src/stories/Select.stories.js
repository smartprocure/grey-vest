import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Select, Grid } from '..'
import { optionsFromArray } from '../utils'

export default { title: 'Select', component: Select }

let options = optionsFromArray(_.times(loremIpsum, 5))

export let usage = () => {
  let [value, setValue] = React.useState(1)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{value}</b>
      </div>
      <Select {...F.domLens.value([value, setValue])} options={options} />
    </Grid>
  )
}

export let shortOptions = () => (
  <Select
    options={optionsFromArray(_.times(() => loremIpsum({ units: 'words' }), 8))}
  />
)

export let noOptions = () => <Select options={[]} />

export let native = () => {
  let selected = React.useState(1)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(selected)}</b>
      </div>
      <Select native {...F.domLens.value(selected)} options={options} />
    </Grid>
  )
}

export let disabled = () => <Select options={options} disabled />
