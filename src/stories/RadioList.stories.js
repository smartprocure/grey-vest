import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import { RadioList, Grid } from '..'
import F from 'futil'
import { optionsFromArray } from '../utils'

export default { title: 'RadioList', component: RadioList }

let options = optionsFromArray(_.times(loremIpsum, 5))
let shortChoices = _.times(() => loremIpsum({ units: 'words' }), 30)

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

export let columns = () => {
  let value = React.useState(1)
  return (
    <Grid gap={1}>
      <div>
        RadioList uses SpacedList internally, and also accepts that component's{' '}
        <code>columnCount</code> and <code>columnWidth</code> props.
      </div>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList
        {...F.domLens.value(value)}
        options={optionsFromArray(shortChoices)}
        columnCount={Infinity}
      />
    </Grid>
  )
}
