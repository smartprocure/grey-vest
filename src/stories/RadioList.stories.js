import React from 'react'
import _ from 'lodash/fp'
import { RadioList, Grid } from '..'
import F from 'futil'
import { lipsum, optionsFromArray } from './utils'

export default { title: 'RadioList', component: RadioList }

let options = optionsFromArray(_.times(lipsum, 5))
let shortOptions = optionsFromArray(_.times(() => lipsum(1, 'words'), 30))

export let baseStory = () => {
  let value = React.useState(0)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList
        {...F.domLens.value(value)}
        options={[
          ..._.initial(options),
          { ..._.last(options), disabled: true },
        ]}
      />
    </Grid>
  )
}

export let native = () => {
  let value = React.useState(0)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList
        native
        {...F.domLens.value(value)}
        options={[
          ..._.initial(options),
          { ..._.last(options), disabled: true },
        ]}
      />
    </Grid>
  )
}

export let columns = () => {
  let value = React.useState()
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList
        {...F.domLens.value(value)}
        options={shortOptions}
        columnCount={Infinity}
      />
    </Grid>
  )
}
columns.story = {
  parameters: {
    docs: {
      storyDescription:
        "RadioList uses ColumnList internally, so it also accepts all of that component's props (`columnCount`, `columnWidth`, `gap`, and `columnGap`).",
    },
  },
}

export let disabled = () => {
  let value = React.useState(0)
  return (
    <Grid gap={1}>
      <div>
        Selected: <b>{F.view(value)}</b>
      </div>
      <RadioList
        {...F.domLens.value(value)}
        options={_.map(_.set('disabled', true), options)}
      />
    </Grid>
  )
}
