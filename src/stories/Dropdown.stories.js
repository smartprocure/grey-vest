import React from 'react'
import _ from 'lodash/fp'
import { Flex, Dropdown, DropdownItem } from '..'
import { lipsum } from './utils'

export default { title: 'Dropdown', component: Dropdown }

let Center = props => (
  <Flex gap="md" justifyContent="space-around" alignItems="center" {...props} />
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
    <Dropdown secondary large icon="local_bar">
      {generateDropdownItems(5)}
    </Dropdown>
    <Dropdown trigger="icon" icon="beach_access">
      {generateDropdownItems(5)}
    </Dropdown>
  </Center>
)

export let closingFromDropdownItem = () => (
  <Center>
    <Dropdown label="dropdown with 'keepopen'" keepOpen>
      <DropdownItem icon="tag_faces">
        Clicking this item does nothing
      </DropdownItem>
      <DropdownItem closePopup icon="close">
        Clicking this item closes the popup
      </DropdownItem>
    </Dropdown>
  </Center>
)
