import React from 'react'
import { Flex, Title, Dropdown, DropdownItem, Divider } from '..'

export default { title: 'Dropdown', component: Dropdown }

let Center = props => (
  <Flex justifyContent="center" alignItems="center" {...props} />
)

export let fullExample = () => {
  let ref = React.useRef()
  return (
    <Center>
      <i ref={ref}>test</i>
      <Dropdown trigger="button" isOpen>
        <DropdownItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DropdownItem>
        <DropdownItem disabled>
          Aliquam nec fermentum lorem, vel facilisis nulla
        </DropdownItem>
        <Divider margin={0.5} />
        <DropdownItem icon="eco">Etiam vitae mi elit</DropdownItem>
        <DropdownItem icon="face">In eu maximus felis</DropdownItem>
        <DropdownItem truncate icon="favorite">
          Pellentesque a elit sodales, gravida magna sit amet, lacinia odio
        </DropdownItem>
      </Dropdown>
    </Center>
  )
}

export let minWidth = () => (
  <Center>
    <Dropdown label="hello world" isOpen>
      <DropdownItem>A</DropdownItem>
      <DropdownItem>B</DropdownItem>
    </Dropdown>
  </Center>
)

export let maxWidth = () => (
  <Center>
    <Dropdown>
      <DropdownItem>
        Cras condimentum nulla massa, ut fermentum urna molestie eu. Phasellus
        dictum faucibus enim, eu tempus nulla efficitur nec.
      </DropdownItem>
      <DropdownItem>
        Quisque consectetur viverra dictum. In hac habitasse platea dictumst.
        Praesent purus mauris, laoreet non laoreet non, malesuada et urna.
      </DropdownItem>
    </Dropdown>
  </Center>
)
