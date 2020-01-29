import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import { RadioList, Grid } from '..'
import F from 'futil'

export default { title: 'RadioList', component: RadioList }

let choices = _.times(loremIpsum, 5)
let options = F.mapIndexed((label, value) => ({ label, value }), choices)

export let baseStory = () => {
  let value = React.useState(1)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList {...F.domLens.value(value)} options={options} />
    </Grid>
  )
}

export let native = () => {
  let value = React.useState(1)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList native {...F.domLens.value(value)} options={options} />
    </Grid>
  )
}
