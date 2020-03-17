import _ from 'lodash/fp'
import React from 'react'
import TableFooter from '../TableFooter'
import { Button } from '..'
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
  startRecord: {
    type: 'number',
    description: 'Number of the first item on the current page',
    defaultValue: 'pageSize * (page - 1) + 1',
  },
  endRecord: {
    type: 'number',
    description:
      'Number of the last item on the current page. Used to display pagination details.',
    defaultValue: 'hasMore ? (pageSize * page) : 0',
  },
  hasMore: {
    type: 'boolean',
    description:
      'If set, shows a "Load more" button that advances the page via `onChangePage`. ',
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
          totalRecords: [0],
          hasMore: [hasMore, setHasMore],
        }}
        fields={{
          hasMore: { type: 'checkbox' },
          totalRecords: { disabled: true },
        }}
      />
      <TableFooter
        {...{
          page,
          pageSize,
          onChangePage,
          onChangePageSize,
          hasMore,
        }}
      />
    </>
  )
}
hasMore.story = { name: 'hasMore' }

export let hasMoreWithEndRecord = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let [hasMore, setHasMore] = React.useState(true)
  let endRecord = page * pageSize
  return (
    <>
      <Controls
        state={{
          hasMore: [hasMore, setHasMore],
          endRecord: [endRecord],
        }}
        fields={{
          hasMore: { type: 'checkbox' },
          endRecord: { disabled: true },
        }}
      />
      <TableFooter
        {...{
          page,
          pageSize,
          onChangePage,
          onChangePageSize,
          hasMore,
          endRecord,
        }}
      />
    </>
  )
}

hasMoreWithEndRecord.story = {
  name: 'hasMore with endRecord',
  parameters: {
    docs: {
      storyDescription: `
The \`endRecord\` prop allows TableFooter to display useful information in the bottom-right section even when \`totalRecords\` is missing and \`hasMore\` is false. It should contain the number of the last record on the page; usually this is \`page\` * \`pageSize\`, but it might be less if there are fewer items on the page than \`pageSize\` allows.
`,
    },
  },
}

export let hasMoreWithTotalRecords = () => {
  let [page, onChangePage] = React.useState(1)
  let [pageSize, onChangePageSize] = React.useState(20)
  let [hasMore, setHasMore] = React.useState(true)
  let [totalRecords, setTotalRecords] = React.useState(undefined)
  return (
    <>
      <Controls
        state={{
          hasMore: [hasMore, setHasMore],
          totalRecords: [totalRecords, setTotalRecords],
        }}
        fields={{
          hasMore: { type: 'checkbox' },
          totalRecords: { disabled: true },
        }}
      >
        <Button danger onClick={() => setTotalRecords(0)}>
          Clear total
        </Button>
      </Controls>
      <TableFooter
        onChangePage={_.over([
          p => setTotalRecords(x => _.max([x, p * pageSize])),
          onChangePage,
        ])}
        {...{
          page,
          pageSize,
          onChangePageSize,
          hasMore,
          totalRecords,
        }}
      />
    </>
  )
}
