import React from 'react'
import F from 'futil'
import { TableFooter, TextInput, Text, Grid, Divider } from '..'
import decorator from './decorator'

export default {
  title: 'TableFooter',
  decorators: [decorator],
  component: TableFooter,
}

export let story = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let totalRecordsLens = React.useState(21)
  return (
    <>
      <Grid columns={3} gap={1}>
        <div>
          <Text as="div">Page:</Text>{' '}
          <TextInput {...F.domLens.value([page, onChangePage])} />
        </div>
        <div>
          <Text as="div">Page Count:</Text>{' '}
          <TextInput {...F.domLens.value([pageSize, onChangePageSize])} />
        </div>
        <div>
          <Text as="div">Total Records:</Text>{' '}
          <TextInput {...F.domLens.value(totalRecordsLens)} />
        </div>
      </Grid>
      <Divider m={2} />
      <TableFooter
        {...{ page, pageSize, onChangePage, onChangePageSize }}
        totalRecords={totalRecordsLens[0]}
      />
    </>
  )
}
