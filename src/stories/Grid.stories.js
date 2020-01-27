/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { Grid, GridItem } from '..'

export default { title: 'Grid', component: Grid }

export let grailDemo = () => (
  <>
    <Grid
      gap={3}
      areas={[
        'header header header',
        'left main right',
        'footer footer footer',
      ]}
      rows="2fr 5fr 1fr"
      columns="1fr 3fr 1fr"
      css={{'> *': { border: '2px solid black' }}}
    >
      <GridItem area="header">header</GridItem>
      <GridItem area="footer">footer</GridItem>
      <GridItem area="main">main content</GridItem>
      <GridItem area="right">right sidebar</GridItem>
      <GridItem area="left">left sidebar</GridItem>
    </Grid>
  </>
)

let gridItemStyle = {
  padding: 5,
  backgroundColor: 'white',
  display: 'inline-flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  justifySelf: 'stretch',
  textAlign: 'center',
}

export let gridItemPositioning = () => (
  <>
    <Grid
      columns="repeat(8, 50px)"
      rows="repeat(8, 50px)"
      gap="xs"
      inline
      css={{ backgroundColor: 'lightgrey', '> *': gridItemStyle }}
    >
      <GridItem column={4} row={3}>
        (4, 3)
      </GridItem>
      <GridItem column={4} row={8} width={5}>
        (4, 8); 5w
      </GridItem>
      <GridItem column="7/9" row={2} height={4} placeSelf="center center">
        (7:9, 2); 4h
      </GridItem>
      <GridItem column="3/5" row="4/8">
        (3:5, 4:8)
      </GridItem>
      <GridItem area="2/1/4/3">(1:3, 2:4)</GridItem>
      <GridItem>A</GridItem>
      <GridItem>B</GridItem>
      <GridItem width={2}>C; 2w</GridItem>
    </Grid>
  </>
)

export let rowsColumnsShorthand = () => (
  <Grid columns={5} gap={1}>
    {_.times(
      n => (
        <div style={{ border: '2px solid black' }}>{n}</div>
      ),
      20
    )}
  </Grid>
)
rowsColumnsShorthand.story = { name: 'Rows/columns shorthand' }
