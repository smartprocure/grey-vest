import React from 'react'
import { action } from '@storybook/addon-actions'
import { DateInput, Grid, Text } from '..'
import _ from 'lodash/fp'

export default { title: 'DateInput', component: DateInput }

export let baseStory = () => {
  let [date, setDate] = React.useState(new Date('2019-12-31T05:00Z'))
  return (
    <Grid gap={2} placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateInput
        value={date}
        onChange={_.flow(
          _.tap(action('date changed')),
          setDate
        )}
      />
    </Grid>
  )
}

export let native = () => {
  let [date, setDate] = React.useState(new Date('2019-12-31T05:00Z'))
  return (
    <Grid gap={2} placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateInput
        native
        value={date}
        onChange={setDate}
      />
    </Grid>
  )
}

export let withAllowedRange = () => (
  <DateInput
    onChange={action('date changed')}
    minDate={new Date(new Date().setDate(5))}
    maxDate={new Date(new Date().setDate(15))}
  />
)
