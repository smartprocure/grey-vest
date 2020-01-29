import React from 'react'
import DataTable from '../DataTable'
import _ from 'lodash/fp'
import F from 'futil'

export default { title: 'DataTable', component: DataTable }

let data = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

let fields = F.arrayToObject(_.identity, F.autoLabelOption, _.keys(data[0]))

export let baseUsage = () => <DataTable fields={fields} data={data} />
