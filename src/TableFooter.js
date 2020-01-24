/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import Pager from './Pager'
import PageSize from './PageSize'
import Flex from './Flex'
import { Text } from './Typography'
import theme from './theme'

let showing = (totalRecords, page, pageSize) => {
  let min = _.min([totalRecords, pageSize * (page - 1) + 1])
  let max = _.min([totalRecords, pageSize * page])
  return min >= max ? max : `${min}-${max}`
}

let TableFooter = ({
  page = 1,
  onChangePage,
  pageSize,
  onChangePageSize,
  pageSizeOptions,
  totalRecords = 0,
  ...props
}) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    css={{ marginTop: theme.spaces.sm }}
    {...props}
  >
    <PageSize
      sizeOptions={pageSizeOptions}
      value={pageSize}
      onChange={onChangePageSize}
      css={{ flex: 1 }}
    />
    <Pager
      css={{ flex: 1 }}
      value={page}
      onChange={onChangePage}
      pageCount={_.ceil(totalRecords / pageSize)}
    />
    <Text small css={{ flex: 1, textAlign: 'right' }}>
      <b>Showing</b> {showing(totalRecords, page, pageSize)} of {totalRecords}
    </Text>
  </Flex>
)

export default TableFooter
