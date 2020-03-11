import React from 'react'
import { Table } from '..'
import _ from 'lodash/fp'
import { flag } from './commonProps'

let props = {
  plain: {
    ...flag,
    description: 'Disables the stripe effect on table rows',
  },
}
export default { title: 'Table', component: Table, parameters: { props } }

let users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

export let story = () => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
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
    </tbody>
  </Table>
)

export let plain = () => (
  <Table plain>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
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
    </tbody>
  </Table>
)
