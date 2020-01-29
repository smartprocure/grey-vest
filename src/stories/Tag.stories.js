import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import { Tag, Grid } from '..'

export default { title: 'Tag', component: Tag }

export let baseUsage = () => <Tag value="hello world!" />

export let removeButton = () => (
  <Tag value="Removable tag" removeTag={() => alert('remove tag')} />
)

export let longTag = () => (
  <Tag value={loremIpsum({ count: 4 })} removeTag={() => alert('remove tag')} />
)

export let styling = () => {
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
