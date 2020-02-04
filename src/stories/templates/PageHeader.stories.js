import React from 'react'
import F from 'futil'
import { Flex, Button, Subtitle, Dropdown, DropdownItem } from '../..'
import theme from '../../theme'

export default { title: 'Demos | Page Header' }

export let story = () => {
  let open = React.useState(false)
  let SubSection = ({ active, ...props }) => (
    <Button.Ghost
      compact
      style={{ color: !active && theme.colors.secondaries[1] }}
      {...props}
    />
  )
  return (
    <Flex
      inline
      gap={1}
      alignItems="center"
      style={{ backgroundColor: theme.colors.neutrals[1] }}
    >
      <Subtitle large>Section</Subtitle>
      <SubSection active>Sub-section</SubSection>
      <SubSection>Sub-section</SubSection>
      <Dropdown open={open}>
        <DropdownItem>Subsection item 1</DropdownItem>
        <DropdownItem>Subsection item 2</DropdownItem>
        <DropdownItem>Subsection item 3</DropdownItem>
      </Dropdown>
      <SubSection onClick={F.flip(open)} icon="keyboard_arrow_down">
        Sub-section
      </SubSection>
    </Flex>
  )
}
