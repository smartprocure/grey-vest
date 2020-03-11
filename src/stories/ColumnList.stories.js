import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Divider, Flex, ColumnList, FormField } from '..'
import { useLensObject } from '../utils'
import { spacingValue, cssValue } from './commonProps'
import theme from '../theme'

let props = {
  gap: {
    type: spacingValue,
    defaultValue: 0,
    description: 'vertical spacing between each element in the list',
  },
  columnGap: {
    type: spacingValue,
    defaultValue: 0,
    description: 'horizontal spacing between columns',
  },
  columnCount: {
    type: 'number',
    defaultValue: 1,
    description: '_maximum_ number of columns',
  },
  columnWidth: {
    type: cssValue,
    defaultValue: theme.widths.xs,
    description: '_minimum_ width of each column',
  },
}

export default {
  title: 'ColumnList',
  component: ColumnList,
  parameters: { props },
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
