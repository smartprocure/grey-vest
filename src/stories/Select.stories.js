import React from 'react'
import { Select, Grid, Text } from '..'
import F from 'futil'

export default { title: 'Select', component: Select }

let options = F.mapIndexed((label, value) => ({ label, value }), [
  'Nulla et fringilla nisl',
  'Aliquam eu bibendum eros',
  'Mauris auctor scelerisque erat quis imperdiet. Nulla consequat, velit tincidunt accumsan laoreet, metus est euismod libero, eget euismod nisl eros eget metus.',
  'Phasellus at efficitur quam',
])

export let baseUsage = () => {
  let [value, setValue] = React.useState(1)
  return (
    <Grid gap={2}>
      <Text small>
        Selected: <i>{value}</i>
      </Text>
      <Select {...F.domLens.value([value, setValue])} options={options} />
    </Grid>
  )
}

export let native = () => {
  let selected = React.useState(1)
  return (
    <Grid gap={2}>
      <Text small>
        Selected: <i>{F.view(selected)}</i>
      </Text>
      <Select native {...F.domLens.value(selected)} options={options} />
    </Grid>
  )
}

export let disabled = () => <Select options={options} disabled />
