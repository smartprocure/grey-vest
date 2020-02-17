import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { CheckboxList, Grid } from '..'
import { lipsum, optionsFromArray } from './utils'

export default { title: 'CheckboxList', component: CheckboxList }

let options = optionsFromArray(_.times(lipsum, 5))

export let story = () => {
  let values = React.useState([0, 1])
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>[{_.join(', ', F.view(values))}]</b>
      </div>
      <CheckboxList
        {...F.domLens.value(values)}
        options={[
          ..._.initial(options),
          { ..._.last(options), disabled: true },
        ]}
      />
    </Grid>
  )
}

export let columns = () => {
  let values = React.useState()
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>[{_.join(', ', F.view(values))}]</b>
      </div>
      <CheckboxList
        {...F.domLens.value(values)}
        options={options}
        columnCount={2}
      />
    </Grid>
  )
}
columns.story = {
  parameters: {
    docs: {
      storyDescription:
        "CheckboxList uses ColumnList internally, so it also accepts all of that component's props (`columnCount`, `columnWidth`, `gap`, and `columnGap`).",
    },
  },
}

export let disabled = () => {
  let values = React.useState([0, 1])
  return (
    <Grid gap="sm">
      <div>
        Selected: <b>[{_.join(', ', F.view(values))}]</b>
      </div>
      <CheckboxList
        native
        {...F.domLens.value(values)}
        options={_.map(_.set('disabled', true), options)}
      />
    </Grid>
  )
}
