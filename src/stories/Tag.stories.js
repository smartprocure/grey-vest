import React from 'react'
import { Tag, Grid } from '..'
import _ from 'lodash/fp'

export default { title: 'Tag', component: Tag }

export let baseUsage = () => <Tag value="hello world!" />

export let withRemoveButton = () => (
  <Tag value="Removable tag" removeTag={() => alert('remove tag')} />
)

export let withTagStyle = () => {
  let colorFromValue = value => ({ color: value })
  return (
    <Grid placeItems="start" gap={1}>
      <Tag value="magenta" tagStyle={colorFromValue} />
      <Tag value="limegreen" tagStyle={colorFromValue} />
      <Tag
        value="tagStyle can also be an object"
        tagStyle={{ color: 'white', background: 'black' }}
      />
      <Tag
        value="red button"
        removeTag={_.noop}
        tagStyle={{ '.remove-button': { color: 'red' } }}
      />
    </Grid>
  )
}
