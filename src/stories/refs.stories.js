import React from 'react'
import F from 'futil'
import { Button, TextInput, Textarea, Select, Grid, Divider } from '..'

let input
let select
let textArea

export default { title: 'Refs' }

export let story = () => (
  <Grid gap={1}>
    <TextInput ref={e => (input = e)} placeholder="Text input" />
    <Textarea ref={e => (textArea = e)} placeholder="Textarea" />
    <Select
      ref={e => (select = e)}
      placeholder="Select"
      options={F.autoLabelOptions(['Option 1', 'Option 2'])}
    />
    <Divider />
    <Grid columns={3} gap="md">
      <Button large onClick={() => input.focus()}>
        Focus Input
      </Button>
      <Button large onClick={() => textArea.focus()}>
        Focus Text Area
      </Button>
      <Button large onClick={() => select.focus()}>
        Focus Select
      </Button>
    </Grid>
  </Grid>
)
