import React from 'react'
import F from 'futil'
import { TextHighlight, TextInput, Text, Grid } from '..'
import decorator from './decorator'

export default {
  title: 'TextHighlight',
  component: TextHighlight,
  decorators: [decorator]
}

let lipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export let usage = () => {
  let filter = React.useState('')
  return (
    <Grid gap={1}>
      <TextInput placeholder="Enter text to highlight..." {...F.domLens.value(filter)} />
      <Text>
        <TextHighlight text={lipsum} pattern={F.view(filter)} />
      </Text>
    </Grid>
  )
}
