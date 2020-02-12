import React from 'react'
import { Awaiter, Button, Box, Grid, GridItem } from '..'

export default { title: 'Awaiter', component: Awaiter }

export let story = () => {
  let resolve
  let reject
  let p = () =>
    new Promise((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject
    })
  return (
    <Grid gap={1} columns={2}>
      <GridItem as={Box} width={2}>
        <Awaiter promiseFn={p}>{x => <div>{x}</div>}</Awaiter>
      </GridItem>
      <Button success onClick={() => resolve('async value')}>
        Resolve
      </Button>
      <Button
        danger
        onClick={() => reject({ message: ['some error', 'some other error'] })}
      >
        Reject
      </Button>
    </Grid>
  )
}
