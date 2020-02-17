/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import _ from 'lodash/fp'
import * as F from 'futil'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import Table from './Table'
import Flex from './Flex'
import IconButton from './IconButton'
import Icon from './Icon'
import theme from './theme'

export let Column = _.identity
Column.displayName = 'Column'

let ExpandedSection = observer(
  ({ columnCount, expandedRow }) =>
    _.getOr(null, 'details.Component', expandedRow) && (
      <tr align="center">
        <td
          colSpan={columnCount}
          css={{
            backgroundColor: theme.colors.neutralLight,
          }}
        >
          {expandedRow.details.Component(
            _.get(expandedRow.field, expandedRow.record),
            expandedRow.record
          )}
        </td>
      </tr>
    )
)

let TableBodyState = () => {
  let state = {
    expanded: observable(new Map()),
    onClick(field, keyField, record, index, details) {
      let key = record[keyField]
      let indexedField = `${field}${index}`

      if (_.get('indexedField', state.expanded.get(key)) !== indexedField) {
        state.expanded.set(key, {
          key,
          record,
          field,
          indexedField,
          details,
        })
      } else {
        state.expanded.delete(key)
      }
    },
  }

  return state
}

let TableBody = inject(TableBodyState)(
  observer(({ data, columns, recordKey, expanded, onClick }) => (
    <tbody>
      {_.map(
        x => (
          <Fragment key={x[recordKey]}>
            <tr
              {...x.rowAttrs}
              key={x[recordKey]}
              className={_.get('rowAttrs.className', x)}
              css={
                expanded.has(x[recordKey]) && {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.background,
                }
              }
            >
              {F.mapIndexed(
                ({ field, display = x => x, details = {} }, i) => (
                  <td
                    key={`${field}${i}`}
                    {...!_.isEmpty(details) && {
                      style: {
                        cursor: !_.isEmpty(details) ? 'pointer' : 'auto',
                      },
                      onClick: () =>
                        onClick(field, recordKey, x, i, details, expanded),
                    }}
                  >
                    {_.getOr(
                      display,
                      `${
                        _.isEqual(
                          _.get('indexedField', expanded.get(x[recordKey])),
                          `${field}${i}`
                        )
                          ? 'collapse'
                          : 'expand'
                      }.display`,
                      details
                    )(_.get(field, x), x)}
                  </td>
                ),
                columns
              )}
            </tr>
            {/* See if there is a details component to render for the column value when row expanded */}
            {expanded.has(x[recordKey]) && (
              <ExpandedSection
                expandedRow={expanded.get(x[recordKey])}
                columnCount={columns.length}
              />
            )}
          </Fragment>
        ),
        data
      )}
    </tbody>
  ))
)

let TableState = (stores, props) => ({
  columns: _.map(
    ({ props }) => ({
      ..._.pick(['field', 'label', 'display', 'enableSort'], props),
      details: F.compactObject({
        ..._.pick(['expand', 'collapse'], props),
        Component: props.children,
      }),
    }),
    _.castArray(props.children)
  ),
})

let ExpandableTable = inject(TableState)(
  observer(
    ({
      data,
      columns,
      recordKey = 'key',
      sortField,
      sortDir,
      columnSort = _.identity,
      ...props
    }) => (
      <Table plain {...props.tableAttrs}>
        <thead>
          <tr>
            {F.mapIndexed(
              (c, i) => (
                <th key={`${c.field}${i}`}>
                  <Flex alignItems="center" gap="xs">
                    <span>
                      {F.callOrReturn(
                        _.getOr(F.autoLabel(c.field), 'label', c)
                      )}
                    </span>
                    {sortDir && c.field === sortField && (
                      <Icon
                        icon={
                          { asc: 'expand_less', desc: 'expand_more' }[sortDir]
                        }
                      />
                    )}
                    {c.enableSort && (
                      <IconButton
                        small
                        onClick={() => columnSort(c)}
                        icon="sort"
                      />
                    )}
                  </Flex>
                </th>
              ),
              columns
            )}
          </tr>
        </thead>
        <TableBody columns={columns} data={data} recordKey={recordKey} />
      </Table>
    )
  )
)

ExpandableTable.displayName = 'ExpandableTable'

export default ExpandableTable
