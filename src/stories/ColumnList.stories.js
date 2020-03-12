import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { Divider, ColumnList } from '..'
import { useLensObject } from '../utils'
import { columnProps } from './commonProps'
import { lipsum, Controls } from './utils'

export default {
  title: 'ColumnList',
  component: ColumnList,
  parameters: { props: columnProps },
}

let content = _.times(lipsum, 10)

export let story = () => {
  let state = useLensObject({
    gap: 8,
    columnGap: 16,
    columnCount: 5,
    columnWidth: 300,
  })
  return (
    <>
      <Controls state={state} />
      <Divider margin="md" />
      <ColumnList
        {..._.mapValues(
          _.flow(
            F.view,
            _.toNumber
          ),
          state
        )}
      >
        {F.mapIndexed(
          (x, i) => (
            <div style={{ background: 'cyan' }}>
              <b>({i + 1})</b> {x}
            </div>
          ),
          content
        )}
      </ColumnList>
    </>
  )
}
