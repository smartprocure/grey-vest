import React from 'react'
import { CheckboxList } from '..'
import F from 'futil'

export default { title: 'CheckboxList', component: CheckboxList }

export let baseStory = () => {
  let values = React.useState([])
  return (
    <CheckboxList
      {...F.domLens.targetBinding('value')(values)}
      options={[
        { label: 'Nulla et fringilla nisl', value: 1 },
        { label: 'Aliquam eu bibendum eros', value: 2 },
        {
          label:
            'Mauris auctor scelerisque erat quis imperdiet. Nulla consequat, velit tincidunt accumsan laoreet, metus est euismod libero, eget euismod nisl eros eget metus.',
          value: 3,
        },
        { label: 'Phasellus at efficitur quam', value: 4 },
      ]}
    />
  )
}
