/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Table from './Table'
import Pager from './Pager'
import PageSize from './PageSize'
import Flex from './Flex'

let PagedTable = ({
  page,
  onChangePage,
  pageSize,
  onChangePageSize,
  totalPages = Infinity,
  ...props
}) => (
  <>
    <Table {...props} />
    <Flex justifyContent="space-between" alignItems="center">
      <PageSize value={pageSize} onChange={onChangePageSize} />
      <Pager value={page} onChange={onChangePage} pageCount={totalPages} />
    </Flex>
  </>
)

export default PagedTable
