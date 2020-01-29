import React from 'react'
import { fromPromise } from 'mobx-utils'
import { Awaiter, Button, Box, Grid, GridItem } from '..'

export default { title: 'Awaiter', component: Awaiter }

export let story = () => {
  let resolve
  let reject
  let p = fromPromise(
    new Promise((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject
    })
  )
  return (
    <Grid inline gap={1} columns={2}>
      <GridItem as={Box} width={2}>
        <Awaiter promise={p}>{x => <div>{x}</div>}</Awaiter>
      </GridItem>
      <Button onClick={() => resolve('async value')}>Resolve</Button>
      <Button onClick={() => reject('some error')}>Reject</Button>
    </Grid>
  )
}
