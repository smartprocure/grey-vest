import React from 'react'
import { Select, Grid, Text } from '..'
import F from 'futil'
import _ from 'lodash/fp'

export default { title: 'Select', component: Select }

let options = F.mapIndexed((label, value) => ({ label, value }), [
  'Nulla et fringilla nisl',
  'Aliquam eu bibendum eros',
  'Mauris auctor scelerisque erat quis imperdiet. Nulla consequat, velit tincidunt accumsan laoreet, metus est euismod libero, eget euismod nisl eros eget metus.',
  'Phasellus at efficitur quam',
])

export let native = () => {
  let value = React.useState('')
  return (
    <Grid gap={2}>
      <Text small>
        Selected: <i>{_.getOr('none', [F.view(value), 'label'], options)}</i>
      </Text>
      <Select
        value={1}
        {...F.domLens.targetBinding('value')(value)}
        options={options}
      />
    </Grid>
  )
}

export let disabled = () => <Select options={options} disabled />
