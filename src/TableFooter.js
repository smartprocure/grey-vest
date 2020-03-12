/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import _ from 'lodash/fp'
import Pager from './Pager'
import PagerItem from './PagerItem'
import PageSize from './PageSize'
import Flex from './Flex'
import { Text } from './Typography'
import theme from './theme'

let PageDetails = ({ startRecord, endRecord, totalRecords, hasMore }) => (
  <Text small css={{ flex: '0 1 30%', textAlign: 'right' }}>
    <b>Showing </b>
    {startRecord >= endRecord ? endRecord : `${startRecord}-${endRecord}`}
    {F.isNotNil(totalRecords) && ` of ${totalRecords}${hasMore ? '+' : ''}`}
  </Text>
)

// Requires either `totalRecords` or `hasMore` to do pagination properly.
// `hasMore` is a flag signifying that there is at least one page of records
// after the current one; it allows us to support some pagination functionality
// even when `totalRecords` is not given (eg. for APIs that return paginated
// results without a total count).
let TableFooter = ({
  page = 1,
  onChangePage,
  pageSize,
  onChangePageSize,
  pageSizeOptions,
  hasMore,
  totalRecords,
  startRecord = pageSize * (page - 1) + 1,
  endRecord = hasMore ? page * pageSize : 0,
  ...props
}) => {
  // if endRecord isn't given, approximate it from totalRecords
  if (totalRecords)
    endRecord = endRecord || _.min([page * pageSize, totalRecords])
  if (!hasMore && !totalRecords) totalRecords = endRecord
  let pageCount = _.ceil((totalRecords || endRecord) / pageSize)
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      css={{ padding: theme.spaces.sm }}
      {...props}
    >
      <PageSize
        sizeOptions={pageSizeOptions}
        value={pageSize}
        onChange={size => {
          onChangePage(_.ceil((startRecord || 0) / size) || 1)
          onChangePageSize(size)
        }}
        css={{ flex: '0 1 30%' }}
      />
      <Flex css={{ flex: 1 }} alignItems="center" justifyContent="center">
        <Pager value={page} onChange={onChangePage} pageCount={pageCount} />
        {hasMore && page >= pageCount && (
          <PagerItem onClick={() => onChangePage(page + 1)}>
            Load more...
          </PagerItem>
        )}
      </Flex>
      <PageDetails {...{ totalRecords, startRecord, endRecord, hasMore }} />
    </Flex>
  )
}

export default TableFooter
