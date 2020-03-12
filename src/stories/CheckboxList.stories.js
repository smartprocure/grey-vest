import React from 'react'
import _ from 'lodash/fp'
import { CheckboxList, Divider } from '..'
import { lipsum, optionsFromArray } from './utils'
import { optionProps } from './commonProps'

export default {
  title: 'CheckboxList',
  component: CheckboxList,
  parameters: { props: optionProps },
}

let options = optionsFromArray(_.times(lipsum, 5))

export let story = () => {
  let [checked, setChecked] = React.useState([])
  return (
    <>
      Selected: <b>[{_.join(', ', checked)}]</b>
      <Divider />
      <CheckboxList
        value={checked}
        onChange={setChecked}
        options={[
          { label: '🏈', value: 'sports' },
          { label: '🥡', value: 'takeout' },
          { label: '👌', value: 'ok_hand' },
          { label: '👼', value: 'cherub' },
          { label: '🦾', value: 'bionic_arm', disabled: true },
        ]}
      />
    </>
  )
}

export let columns = () => {
  let [checked, setChecked] = React.useState([0, 1])
  return (
    <>
      Selected: <b>[{_.join(', ', checked)}]</b>
      <Divider />
      <CheckboxList
        value={checked}
        onChange={setChecked}
        options={options}
        columnCount={2}
      />
    </>
  )
}
columns.story = {
  parameters: {
    docs: {
      storyDescription:
        "CheckboxList uses ColumnList internally, so it also accepts all of that component's props (`columnCount`, `columnWidth`, `gap`, and `columnGap`).",
    },
  },
}

export let disabled = () => {
  let [checked, setChecked] = React.useState([0, 1])
  return (
    <>
      Selected: <b>[{_.join(', ', checked)}]</b>
      <Divider />
      <CheckboxList
        native
        value={checked}
        onChange={setChecked}
        options={_.map(_.set('disabled', true), options)}
      />
    </>
  )
}
