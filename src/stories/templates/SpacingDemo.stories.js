import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { loremIpsum } from 'lorem-ipsum'
import { Grid, Divider, Flex, ColumnList, Select, Dynamic } from '../..'

export default { title: 'Demos | Spacing' }

let inlineContent = F.mapIndexed(
  (x, i) => (
    <span key={i} style={{ backgroundColor: 'cyan' }}>
      {x}
    </span>
  ),
  _.times(loremIpsum, 8)
)

export let withInlineContent = () => {
  let components = { Flex, Grid, ColumnList }
  let component = React.useState('Flex')
  return (
    <>
      <Select
        options={F.autoLabelOptions(_.keys(components))}
        {...F.domLens.value(component)}
      />
      <Divider margin="md" />
      <Dynamic component={components[F.view(component)]} gap="sm">
        {inlineContent}
      </Dynamic>
    </>
  )
}

let columnContent = F.mapIndexed(
  (height, i) => (
    <Flex
      alignItems="center"
      justifyContent="center"
      key={i}
      style={{ border: '2px solid cyan', background: 'yellow', fontSize: 20, height }}
    >
      {i}
    </Flex>
  ),
  _.times(() => _.random(1, 10) * 20, 7)
)

export let columns = () => {
  let components = { Grid, ColumnList }
  let component = React.useState('Grid')
  return (
    <>
      <Select
        options={F.autoLabelOptions(_.keys(components))}
        {...F.domLens.value(component)}
      />
      <Divider margin="md" />
      <Dynamic
        component={components[F.view(component)]}
        // both Grid and ColumnList
        gap="sm"
        // Grid property
        columns={2}
        // ColumnList properties
        columnCount={2}
        columnGap="md"
      >
        {columnContent}
      </Dynamic>
    </>
  )
}
columns.story = {
  parameters: {
    docs: {
      storyDescription: 
`
This story demonstrates the differences in the way GreyVest's \`Grid\` and \`ColumnList\` components handle columns.

| | Grid | ColumnList |
| --- | --- | --- |
| **rows** | has rows | does not have rows |
| **gap API** | \`columnGap\` and \`rowGap\` control the gap between columns and rows respectively; \`gap\` is a shorthand to set both | \`gap\` controls the gap between elements, and \`columnGap\` controls the gap between columns |
| **content ordering** | Left-to-right, then top-to-bottom | Top-to-bottom, then left-to-right |
| **placement** | Each child element is placed inside a grid square, which is sized according to the largest element in the row | Content flows vertically within each column, then overflows to the next |
`
    },
  },
}
