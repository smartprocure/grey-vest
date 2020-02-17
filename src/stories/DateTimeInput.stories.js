import React from 'react'
import { action } from '@storybook/addon-actions'
import { DateTimeInput, Grid, Text } from '..'
import _ from 'lodash/fp'

export default { title: 'DateTimeInput', component: DateTimeInput }

export let baseStory = () => {
  let [date, setDate] = React.useState(new Date('2019-12-31T05:00Z'))
  return (
    <Grid gap="md" placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateTimeInput
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
    <Grid gap="md" placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateTimeInput
        native
        value={date}
        onChange={setDate}
      />
    </Grid>
  )
}

export let withAllowedRange = () => (
  <DateTimeInput
    onChange={action('date changed')}
    minDate={new Date(new Date().setDate(5))}
    maxDate={new Date(new Date().setDate(15))}
  />
)
