import React from 'react'
import { Box, Grid, Text } from '..'
import _ from 'lodash/fp'
import theme from '../theme'

export default { title: 'Box', component: Box }

let Backgrounds = ({ children }) => (
  <Grid columns={3}>
    {_.map(
      bg => (
        <div style={{ backgroundColor: bg, padding: 20 }}>{children}</div>
      ),
      ['white', 'grey', 'black']
    )}
  </Grid>
)

export let normalBox = () => (
  <Backgrounds>
    <Box>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let modalBox = () => (
  <Backgrounds>
    <Box modal>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let popupBox = () => (
  <Backgrounds>
    <Box popup>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let controlledPadding = () => {
  let GreyPaddingBox = ({ children, ...props }) => (
    <Box style={{ background: 'lightgrey' }} {...props}>
      <Text as="div" style={{ background: 'white' }}>
        {children}
      </Text>
    </Box>
  )
  return (
    <Grid gap="md">
      <GreyPaddingBox paddingX="lg" paddingY="sm">
        {theme.space('lg')}px by {theme.space('sm')}px padding
      </GreyPaddingBox>
      <GreyPaddingBox padding="sm" paddingY="lg">
        {theme.spaces.sm}px by {theme.spaces.lg}px padding
      </GreyPaddingBox>
      <GreyPaddingBox padding={['xs', 'xs']}>
        {theme.space(0.5)}px by {theme.spaces.xs}px padding
      </GreyPaddingBox>
      <GreyPaddingBox paddingX={0} padding={20}>
        0px by 20px padding
      </GreyPaddingBox>
      {_.map(
        p => (
          <GreyPaddingBox padding={p} key={p}>
            {theme.space(p)}px padding
          </GreyPaddingBox>
        ),
        ['xs', 'sm', 'md', 'lg']
      )}
    </Grid>
  )
}
