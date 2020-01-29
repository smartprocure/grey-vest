import React from 'react'
import { Checkbox } from '..'
import F from 'futil'

export default { title: 'Checkbox', component: Checkbox }

export let interactible = () => {
  let checked = React.useState(false)
  return <Checkbox {...F.domLens.targetBinding('checked')(checked)} />
}

export let unchecked = () => <Checkbox />
export let checked = () => <Checkbox checked />
export let disabled = () => <Checkbox disabled />
export let disabledChecked = () => <Checkbox disabled checked />
