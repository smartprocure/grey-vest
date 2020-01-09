import React from 'react'
import _ from 'lodash/fp'
import { PagerItem, Pager } from '..'
import decorator from './decorator'

export default {
  title: 'Pager',
  component: Pager,
  decorators: [decorator],
}

export let story = () => {
  let [currentPage, setCurrentPage] = React.useState(1)
  return (
  <Pager pages={10} page={currentPage} onChange={setCurrentPage} />
  )
}
