import React from 'react'
import { DropdownItem, Box } from '..'
import { lipsum } from '../utils'
import theme from '../theme'

export default { title: 'DropdownItem', component: DropdownItem }

export let usage = () => <DropdownItem>{lipsum()}</DropdownItem>

export let disabled = () => <DropdownItem disabled>{lipsum()}</DropdownItem>

export let icon = () => <DropdownItem icon="eco">{lipsum()}</DropdownItem>

export let truncate = () => (
  <Box padding={0} style={{ width: theme.widths.md }}>
    <DropdownItem truncate>{lipsum()}</DropdownItem>
  </Box>
)
