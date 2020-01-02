import React from 'react'
import { Tooltip, DropdownItem, Button } from '..'
import decorator from './decorator'

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [decorator],
}

export let tooltip = ({ children }) => (
  <>
    <a data-tip="hello world">hover me</a>
    <Button data-tip="it is a button">is it a button?</Button>
    <DropdownItem data-tip="Quisque ex tellus, egestas id massa sit amet, vestibulum iaculis libero. Quisque tempor ligula ac tincidunt mollis. Quisque consectetur viverra dictum. In hac habitasse platea dictumst.">sgjkh</DropdownItem>
    <Tooltip />
  </>
)
