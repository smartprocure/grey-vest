import React from 'react'
import { Pager } from '..'

export default { title: 'Pager', component: Pager }

export let story = () => {
  let [currentPage, setCurrentPage] = React.useState(1)
  return <Pager pageCount={10} value={currentPage} onChange={setCurrentPage} />
}

export let singlePage = () => {
  let [currentPage, setCurrentPage] = React.useState(1)
  return <Pager pageCount={1} value={currentPage} onChange={setCurrentPage} />
}
