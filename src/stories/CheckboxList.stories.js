import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import F from 'futil'
import { CheckboxList, Grid } from '..'
import { optionsFromArray } from '../utils'

export default { title: 'CheckboxList', component: CheckboxList }

let options = optionsFromArray(_.times(loremIpsum, 5))

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

export let columns = () => {
  let values = React.useState([])
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>[{_.join(', ', F.view(values))}]</b>
      </div>
      <CheckboxList
        {...F.domLens.value(values)}
        options={options}
        columnCount={3}
      />
    </Grid>
  )
}
