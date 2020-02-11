import React from 'react'
import F from 'futil'
import { Button, Flex, Popover, Dialog } from '..'
import { lipsum } from '../utils'

export default { title: 'Popover', component: Popover }

let Center = props => (
  <Flex gap={2} justifyContent="space-around" alignItems="center" {...props} />
)

export let uncontrolled = () => (
  <Popover
    Trigger={Button}
    label="Popover"
    triggerProps={{ icon: 'arrow_drop_down' }}
  >
    Some Popover Content
  </Popover>
)

export let minWidth = () => (
  <Center>
    <Dialog>._.</Dialog>
  </Center>
)

export let maxWidth = () => (
  <Center>
    <Dialog>{lipsum(4)}</Dialog>
  </Center>
)

export let withOpenProp = () => {
  let open = React.useState(false)
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={F.flip(open)}>
        {F.view(open) ? 'Close' : 'Open'} Popover
      </Button>
      <Popover open={open} placement="left">
        Some Popover Content
      </Popover>
    </Flex>
  )
}
withOpenProp.story = { name: "Controlled with 'open' prop" }

export let withIsOpenOnCloseProps = () => {
  let [isOpen, setIsOpen] = React.useState(false)
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={() => setIsOpen(x => !x)}>
        {isOpen ? 'Close' : 'Open'} Popover
      </Button>
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="left"
      >
        Some Popover Content
      </Popover>
    </Flex>
  )
}
withIsOpenOnCloseProps.story = {
  name: "Controlled with 'isOpen'/'onClose' props",
}
