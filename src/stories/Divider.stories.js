import React from 'react'
import _ from 'lodash/fp'
import { Divider, Text, Flex, Grid, Box } from '..'

export default { title: 'Divider', component: Divider }

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
    <Text>head</Text>
    <Divider vertical />
    <Text>shoulders</Text>
    <Divider width={3} style={{ display: 'inline', textAlign: 'center' }} />
    <Text>knees</Text>
    <Divider vertical />
    <Text>toes</Text>
  </Grid>
)

export let controlledMargin = () => (
  <Flex column gap="md">
    {_.map(
      m => (
        <Box padding={0}>
          <Divider margin={m} />
        </Box>
      ),
      ['xs,', 'sm', 'md', 'lg']
    )}
  </Flex>
)
