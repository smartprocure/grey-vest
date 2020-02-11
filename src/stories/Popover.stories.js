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

export let controlledLens = () => {
  let open = React.useState(false)
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={F.flip(open)} primary={!F.view(open)}>
        {F.view(open) ? 'Close' : 'Open'} Popover
      </Button>
      <Popover open={open} placement="left">
        Some Popover Content
      </Popover>
    </Flex>
  )
}
controlledLens.story = { name: "Controlled with 'open' prop" }

export let controlled = () => {
  let [isOpen, setIsOpen] = React.useState(false)
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={() => setIsOpen(x => !x)} primary={!isOpen}>
        {isOpen ? 'Close' : 'Open'} Popover
      </Button>
      <Popover isOpen={isOpen} onChange={setIsOpen} placement="left">
        Some Popover Content
      </Popover>
    </Flex>
  )
}
controlled.story = {
  name: "Controlled with 'isOpen'/'onChange' props",
}

export let controlledWithTrigger = () => {
  let open = React.useState(false)
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={F.flip(open)} primary={!F.view(open)}>
        {F.view(open) ? 'Close' : 'Open'} Popover
      </Button>
      <Popover open={open} Trigger={Button} placement="left" label="open me">
        Some Popover Content
      </Popover>
    </Flex>
  )
}
