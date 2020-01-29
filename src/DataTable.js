import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { Table, LinkButton } from '.'

let DataTable = ({ fields, data, ...props }) => (
  <Table {...props}>
    <thead>
      <tr>
        {F.mapIndexed(
          (field, key) => !field.hidden && <th key={key}>{field.label}</th>,
          fields
        )}
      </tr>
    </thead>
    <tbody>
      {F.mapIndexed(
        (row, i) => (
          <tr key={i}>
            {F.mapIndexed(
              ({ display = x => x, hidden }, key) =>
                !hidden && <td key={key}>{display(row[key], row)}</td>,
              fields
            )}
          </tr>
        ),
        data
      )}
    </tbody>
  </Table>
)
export default DataTable

export let TruncatableDataTable = ({ data, limit = 5, ...props }) => {
  let [show, setShow] = React.useState(false)
  return (
    <>
      <DataTable data={show ? data : _.take(limit, data)} {...props} />
      {data.length > 5 && (
        <LinkButton onClick={() => setShow(x => !x)}>
          {show ? 'Less' : 'More'}...
        </LinkButton>
      )}
    </>
  )
}
