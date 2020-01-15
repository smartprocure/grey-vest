import React from 'react'
import { Divider, Text, Flex, Grid } from '..'
import decorator from './decorator'

export default {
  title: 'Divider',
  decorators: [decorator],
  component: Divider,
}

export let divider = () => (
  <>
    <Text>as above</Text>
    <Divider />
    <Text>so below</Text>
  </>
)

export let vertical = () => (
  <Flex>
    <Text>two paths diverged</Text>
    <Divider vertical />
    <Text>in a lonely wood</Text>
  </Flex>
)

export let withGrid = () => (
  <Grid columns={3} style={{ textAlign: 'center' }}>
    <Text as="span">head</Text>
    <Divider vertical />
    <Text as="span">shoulders</Text>
    <Divider width={3} style={{ display: 'inline', textAlign: 'center' }} />
    <Text as="span">knees</Text>
    <Divider vertical />
    <Text as="span">toes</Text>
  </Grid>
)
