import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import F from 'futil'
import { CheckboxList, Grid } from '..'

export default { title: 'CheckboxList', component: CheckboxList }

let choices = _.times(loremIpsum, 5)
let options = F.mapIndexed((label, value) => ({ label, value }), choices)

export let story = () => {
  let values = React.useState([])
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>[{_.join(', ', F.view(values))}]</b>
      </div>
      <CheckboxList {...F.domLens.value(values)} options={options} />
    </Grid>
  )
}
