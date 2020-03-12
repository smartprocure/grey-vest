import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'
import _ from 'lodash/fp'
import { TextHighlight, TextInput, Text, Grid } from '..'

export default { title: 'TextHighlight', component: TextHighlight }

let text = _.times(() => loremIpsum({ units: 'paragraph' }), 3)

export let usage = () => {
  let [filter, setFilter] = React.useState('')
  return (
    <Grid gap="sm">
      <TextInput
        placeholder="Enter text to highlight..."
        value={filter}
        onChange={setFilter}
      />
      <div>
        {F.mapIndexed(
          (t, i) => (
            <Text as="p" key={i}>
              <TextHighlight text={t} pattern={filter} />
            </Text>
          ),
          text
        )}
      </div>
    </Grid>
  )
}
