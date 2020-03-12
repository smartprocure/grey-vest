import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Divider, Flex, ColumnList, FormField } from '..'
import { useLensObject } from '../utils'
import { columnProps } from './commonProps'


export default {
  title: 'ColumnList',
  component: ColumnList,
  parameters: { props: columnProps },
}

let content = _.times(loremIpsum, 30)

let makeFields = F.mapIndexed((lens, key) => (
  <FormField label={key} type="number" {...F.domLens.value(lens)} />
))

export let story = () => {
  let state = useLensObject({
    gap: 1,
    columnGap: 2,
    columnCount: 5,
    columnWidth: 300,
  })
  return (
    <>
      <Flex gap="sm">{makeFields(state)}</Flex>
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
              {i + 1}. {x}
            </div>
          ),
          content
        )}
      </ColumnList>
    </>
  )
}
