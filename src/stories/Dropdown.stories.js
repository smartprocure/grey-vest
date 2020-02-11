import React from 'react'
import _ from 'lodash/fp'
import { Flex, Dropdown, DropdownItem } from '..'
import { lipsum } from '../utils'

export default { title: 'Dropdown', component: Dropdown }

let Center = props => (
  <Flex gap={2} justifyContent="space-around" alignItems="center" {...props} />
)

let generateDropdownItems = _.times(() => (
  <DropdownItem truncate>{lipsum()}</DropdownItem>
))

export let story = () => (
  <Center>
    <Dropdown label="secrets">{generateDropdownItems(5)}</Dropdown>
  </Center>
)

export let withIconTrigger = () => (
  <Center>
    <Dropdown trigger="icon">{generateDropdownItems(5)}</Dropdown>
  </Center>
)

export let withButtonProps = () => (
  <Center>
    <Dropdown secondary large icon="face">
      {generateDropdownItems(5)}
    </Dropdown>
    <Dropdown trigger="icon" icon="beach_access">{generateDropdownItems(5)}</Dropdown>
  </Center>
)
