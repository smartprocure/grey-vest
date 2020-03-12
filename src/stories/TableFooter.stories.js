import React from 'react'
import TableFooter from '../TableFooter'
import { Controls } from './utils'

let props = {
  page: {
    description: 'Current page number. Starts at 1 for the first page.',
    type: 'number',
    defaultValue: 1,
  },
  onChangePage: {
    type: { summary: 'function', detail: '(page: number) => void' },
  },
  pageSize: { type: 'number', description: 'Number of items per page' },
  onChangePageSize: {
    type: { summary: 'function', detail: '(pageSize: number) => void' },
  },
  totalRecords: {
    description:
      'Total number of items in the table. Used with `pageSize` to calculate the total number of pages.',
    type: 'number',
    defaultValue: 0,
  },
  hasMore: {
    type: 'boolean',
    description: '',
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
      <TableFooter
        {...{ page, pageSize, onChangePage, onChangePageSize, totalRecords }}
      />
    </>
  )
}

export let hasMore = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let [hasMore, setHasMore] = React.useState(true)
  return (
    <>
      <Controls
        state={{
          page: [page, onChangePage],
          pageSize: [pageSize, onChangePageSize],
          hasMore: [hasMore, setHasMore],
        }}
        types={{ hasMore: 'checkbox' }}
      />
      <TableFooter
        {...{ page, pageSize, onChangePage, onChangePageSize, hasMore }}
      />
    </>
  )
}
