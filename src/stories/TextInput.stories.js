import React from 'react'
import { TextInput, Grid } from '..'

export default { title: 'TextInput', component: TextInput }

export let baseUsage = () => (
  <Grid>
    <TextInput placeholder="Enter some text..." />
  </Grid>
)

export let disabled = () => (
  <Grid>
    <TextInput disabled placeholder="I am disabled with a placeholder" />
  </Grid>
)

export let disabledWithValue = () => (
  <Grid>
    <TextInput disabled value="I am disabled with a value" />
  </Grid>
)
