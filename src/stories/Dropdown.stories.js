import React from 'react'
import F from 'futil'
import { observable } from 'mobx'
import { Button, Dropdown, Popover, DropdownItem } from '..'
import Divider from '../Divider'
import decorator from './decorator'

export default {
  title: 'Dropdown',
  component: Popover,
  decorators: [decorator],
}

let ButtonDropdown = ({ children }) => {
  let open = observable.box(false)
  return (
    <div style={{ height: 240 }}>
      <Button icon="keyboard_arrow_down" onClick={F.on(open)}>
        dropdown
      </Button>
      <Dropdown open={open}>{children}</Dropdown>
    </div>
  )
}

export let fullExample = () => {
  let open = observable.box(true)
  return (
    <div style={{ height: 240 }}>
      <Button icon="keyboard_arrow_down" onClick={F.on(open)}>
        dropdown
      </Button>
      <Dropdown open={open}>
        <DropdownItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DropdownItem>
        <DropdownItem disabled>
          Aliquam nec fermentum lorem, vel facilisis nulla
        </DropdownItem>
        <Divider m={0.5} />
        <DropdownItem icon="eco">Etiam vitae mi elit</DropdownItem>
        <DropdownItem icon="face">In eu maximus felis</DropdownItem>
        <DropdownItem truncate icon="favorite">
          Pellentesque a elit sodales, gravida magna sit amet, lacinia odio
        </DropdownItem>
      </Dropdown>
    </div>
  )
}

export let minWidth = () => (
  <div style={{ height: 80 }}>
    <ButtonDropdown isOpen={true}>
      <DropdownItem>A</DropdownItem>
      <DropdownItem>B</DropdownItem>
    </ButtonDropdown>
  </div>
)

export let maxWidth = () => (
  <div style={{ height: 220 }}>
    <ButtonDropdown isOpen={true}>
      <DropdownItem>
        Cras condimentum nulla massa, ut fermentum urna molestie eu. Phasellus
        dictum faucibus enim, eu tempus nulla efficitur nec.
      </DropdownItem>
      <DropdownItem>
        Quisque consectetur viverra dictum. In hac habitasse platea dictumst.
        Praesent purus mauris, laoreet non laoreet non, malesuada et urna.
      </DropdownItem>
    </ButtonDropdown>
  </div>
)
