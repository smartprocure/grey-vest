import React from 'react'
import { Button, Box, Grid, GridItem } from '..'
import CommandButton, { Command } from '../CommandButton'

export default { title: 'CommandButton', component: CommandButton }

export let story = () => {
  let resolve
  let reject
  let command = Command(
    () =>
      new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
      })
  )
  return (
    <Grid gap={1} columns={2}>
      <GridItem style={{ textAlign: 'center' }} as={Box} width={2}>
        <CommandButton command={command} icon="access_time">
          Async thing
        </CommandButton>
      </GridItem>
      <Button success onClick={() => resolve('async value')}>
        Resolve
      </Button>
      <Button danger onClick={() => reject('some error')}>
        Reject
      </Button>
    </Grid>
  )
}
