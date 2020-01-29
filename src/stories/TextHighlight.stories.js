import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'
import _ from 'lodash/fp'
import { TextHighlight, TextInput, Text, Grid } from '..'

export default { title: 'TextHighlight', component: TextHighlight }

let text = _.times(() => loremIpsum({ units: 'paragraph' }), 3)

export let usage = () => {
  let filter = React.useState('')
  return (
    <Grid gap={1}>
      <TextInput
        placeholder="Enter text to highlight..."
        {...F.domLens.value(filter)}
      />
      <div>
        {F.mapIndexed(
          (t, i) => (
            <Text as="p" key={i}>
              <TextHighlight text={t} pattern={F.view(filter)} />
            </Text>
          ),
          text
        )}
      </div>
    </Grid>
  )
}
