import React from 'react'
import { RadioList } from '..'
import F from 'futil'

export default { title: 'RadioList', component: RadioList }

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

export let baseStory = () => {
  let values = React.useState([])
  return (
    <RadioList
      value={1}
      {...F.domLens.targetBinding('value')(values)}
      options={options}
    />
  )
}

export let native = () => {
  let values = React.useState([])
  return (
    <RadioList
      native
      value={1}
      {...F.domLens.targetBinding('value')(values)}
      options={options}
    />
  )
}
