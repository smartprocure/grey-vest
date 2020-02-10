import React from 'react'
import { Title, Dropdown, DropdownItem, Divider } from '..'

export default { title: 'Dropdown', component: Dropdown }

export let fullExample = () => (
  <div style={{ height: 240 }}>
    <Dropdown
      trigger={({ getTriggerProps, triggerRef }) => (
        <Title {...getTriggerProps({ ref: triggerRef })}>hello world</Title>
      )}
      triggerProps={open => ({ primary: true, icon: open ? 'face' : 'eco' })}
    >
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
  </div>
)

export let minWidth = () => (
  <div style={{ height: 80 }}>
    <Dropdown>
      <DropdownItem>A</DropdownItem>
      <DropdownItem>B</DropdownItem>
    </Dropdown>
  </div>
)

export let maxWidth = () => (
  <div style={{ height: 220 }}>
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
  </div>
)
