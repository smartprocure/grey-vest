import React from 'react'
import { TableFooter, Divider } from '..'
import { Controls } from './utils'

let props = {
  page: { type: 'number' },
  onChangePage: {
    type: { summary: 'function', description: '(page: number) => void' },
  },
  pageSize: { type: 'number' },
  onChangePageSize: {
    type: { summary: 'function', description: '(pageSize: number) => void' },
  },
}

export default {
  title: 'TableFooter',
  component: TableFooter,
  parameters: { props },
}

export let story = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let [totalRecords, setTotalRecords] = React.useState(51)
  return (
    <>
      <Controls
        state={{
          page: [page, onChangePage],
          pageSize: [pageSize, onChangePageSize],
          totalRecords: [totalRecords, setTotalRecords],
        }}
      />
      <Divider margin="md" />
      <TableFooter
        {...{ page, pageSize, onChangePage, onChangePageSize, totalRecords }}
      />
    </>
  )
}
