import React from 'react'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Button, ButtonGroup, Grid } from '..'

export default { title: 'ButtonGroup', component: ButtonGroup }

let lipsum = () => loremIpsum({ units: 'word' })

export let story = () => {
  let listButtons = flag =>
    _.map(
      n => <Button {...{ [flag]: true }}>{n}</Button>,
      _.times(lipsum, 4)
    )
  return (
    <Grid inline gap={2}>
      <ButtonGroup>{listButtons()}</ButtonGroup>
      <ButtonGroup>{listButtons('primary')}</ButtonGroup>
      <ButtonGroup>{listButtons('secondary')}</ButtonGroup>
      <ButtonGroup>{listButtons('danger')}</ButtonGroup>
      <ButtonGroup>{listButtons('ghost')}</ButtonGroup>
    </Grid>
  )
}
