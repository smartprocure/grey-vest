import React from 'react'
import { action } from '@storybook/addon-actions'
import { DateInput, Grid, Text } from '..'
import moment from 'moment'
import F from 'futil'
import _ from 'lodash/fp'
import decorator from './decorator'

export default {
  title: 'DateInput',
  decorators: [decorator],
  component: DateInput,
}

export let baseStory = () => {
  let [date, setDate] = React.useState(new Date('2019-12-31T23:59'))
  return (
    <Grid gap={2} placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateInput  value={date} onChange={_.flow(_.tap(action('date changed')), setDate)} />
    </Grid>
  )
}

export let native = () => {
  let [date, setDate] = React.useState(new Date('2019-12-31T23:59'))
  return (
    <Grid gap={2} placeItems="start">
      <Text>Selected: {date.toString()}</Text>
      <DateInput native value={date} onChange={_.flow(_.tap(action('date changed')), setDate)} />
    </Grid>
  )
}
