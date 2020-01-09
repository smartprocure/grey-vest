import React from 'react'
import { observer } from 'mobx-react'
import F from 'futil'

let Awaiter = ({ promise, children }) =>
  promise.case({
    pending: () => <div>Loading...</div>,
    rejected: error => <div>Ooops.. {F.getOrReturn('message', error)}</div>,
    fulfilled: value => <div>{children(value)}</div>,
  })

export default observer(Awaiter)
