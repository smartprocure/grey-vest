import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Divider, Flex, SpacedList, FormField } from '..'
import { useLensObject } from '../utils'

export default {
  title: 'SpacedList',
  component: SpacedList,
  parameters: { props: { rows: [] } },
}

let content = _.times(loremIpsum, 30)

let makeFields = F.mapIndexed((lens, key) => (
  <FormField label={key} type="text" {...F.domLens.value(lens)} />
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
      <Flex gap={1}>{makeFields(state)}</Flex>
      <Divider m={2} />
      <SpacedList
        {..._.mapValues(
          _.flow(
            F.view,
            _.toInteger
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
      </SpacedList>
    </>
  )
}
