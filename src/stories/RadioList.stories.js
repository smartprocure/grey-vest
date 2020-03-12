import React from 'react'
import _ from 'lodash/fp'
import { RadioList, Divider } from '..'
import { lipsum, optionsFromArray } from './utils'
import { optionProps } from './commonProps'

export default {
  title: 'RadioList',
  component: RadioList,
  parameters: { props: optionProps },
}

let options = optionsFromArray(_.times(lipsum, 5))
let shortOptions = optionsFromArray(_.times(() => lipsum(1, 'words'), 30))

export let baseStory = () => {
  let [selected, setSelected] = React.useState('eye')
  return (
    <>
      Selected: <b>{selected}</b>
      <Divider />
      <RadioList
        value={selected}
        onChange={setSelected}
        options={[
          { label: '🧅', value: 'onion' },
          { label: '🐙', value: 'octopus' },
          { label: '👁', value: 'eye' },
          { label: '🪑', value: 'chair' },
          { label: '🦠', value: 'virus', disabled: true },
        ]}
      />
    </>
  )
}

export let native = () => {
  let [selected, setSelected] = React.useState(0)
  return (
    <>
      Selected: <b>{selected}</b>
      <Divider />
      <RadioList
        native
        value={selected}
        onChange={setSelected}
        options={[
          ..._.initial(options),
          { ..._.last(options), disabled: true },
        ]}
      />
    </>
  )
}

export let columns = () => {
  let [selected, setSelected] = React.useState(0)
  return (
    <RadioList
      value={selected}
      onChange={setSelected}
      options={shortOptions}
      columnCount={Infinity}
    />
  )
}
columns.story = {
  parameters: {
    docs: {
      storyDescription:
        "RadioList uses ColumnList internally, so it also accepts all of that component's props (`columnCount`, `columnWidth`, `gap`, and `columnGap`).",
    },
  },
}

export let disabled = () => {
  let [selected, setSelected] = React.useState(0)
  return (
    <>
      Selected: <b>{selected}</b>
      <Divider />
      <RadioList
        value={selected}
        onChange={setSelected}
        options={_.map(_.set('disabled', true), options)}
      />
    </>
  )
}
