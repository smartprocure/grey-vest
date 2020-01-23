import React from 'react'
import { Table } from '..'
import PagedTable from '../PagedTable'
import _ from 'lodash/fp'
import decorator from './decorator'

export default {
  title: 'Table',
  decorators: [decorator],
  component: Table,
}

let users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

export let baseUsage = () => (
  <Table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Active</th>
    </tr>
    {_.map(
      ({ user, age, active }) => (
        <tr>
          <td>{user}</td>
          <td>{age}</td>
          <td>{active ? 'yes' : 'no'}</td>
        </tr>
      ),
      users
    )}
  </Table>
)

export let pagedTable = () => (
  <PagedTable>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Active</th>
    </tr>
    {_.map(
      ({ user, age, active }) => (
        <tr>
          <td>{user}</td>
          <td>{age}</td>
          <td>{active ? 'yes' : 'no'}</td>
        </tr>
      ),
      users
    )}
  </PagedTable>
)
