import React from 'react'
import { Select, Grid, Text } from '..'
import F from 'futil'
import _ from 'lodash/fp'
import decorator from './decorator'

export default {
  title: 'Select',
  decorators: [decorator],
  component: Select,
}

let options = [
  { label: 'Nulla et fringilla nisl', value: 1 },
  { label: 'Aliquam eu bibendum eros', value: 2 },
  {
    label:
      'Mauris auctor scelerisque erat quis imperdiet. Nulla consequat, velit tincidunt accumsan laoreet, metus est euismod libero, eget euismod nisl eros eget metus.',
    value: 3,
  },
  { label: 'Phasellus at efficitur quam', disabled: true, value: 4 },
]

export let native = () => {
  let value = React.useState('')
  return (
    <Grid gap={2}>
      <Text>
        Selected: <b>{F.view(value) || 'none'}</b>
      </Text>
      <Select
        value={1}
        {...F.domLens.targetBinding('value')(value)}
        options={options}
      />
    </Grid>
  )
}
