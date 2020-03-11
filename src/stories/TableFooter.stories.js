import React from 'react'
import { TableFooter, TextInput, Text, Grid, Divider } from '..'

let props = [
  { name: 'page', type: { summary: 'integer' } },
  { name: 'onChangePage', type: { summary: 'function' } },
  { name: 'pageSize', type: { summary: 'integer' } },
  { name: 'onChangePageSize', type: { summary: 'function' } },
]

export default {
  title: 'TableFooter',
  component: TableFooter,
  parameters: { props },
}

export let story = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let [totalRecords, setTotalRecords] = React.useState(21)
  return (
    <>
      <Grid columns={3} gap="sm">
        <div>
          <Text as="div">Page:</Text>
          <TextInput type="number" value={page} onChange={onChangePage} />
        </div>
        <div>
          <Text as="div">Page Size:</Text>
          <TextInput
            type="number"
            value={pageSize}
            onChange={onChangePageSize}
          />
        </div>
        <div>
          <Text as="div">Total Records:</Text>
          <TextInput
            type="number"
            value={totalRecords}
            onChange={setTotalRecords}
          />
        </div>
      </Grid>
      <Divider margin="md" />
      <TableFooter
        {...{ page, pageSize, onChangePage, onChangePageSize }}
        totalRecords={totalRecords}
      />
    </>
  )
}
