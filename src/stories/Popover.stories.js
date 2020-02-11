import React from 'react'
import F from 'futil'
import { Button, Flex, Popover, Dialog } from '..'
import { lipsum } from '../utils'
import { func } from './commonProps'

let props = {
  sections: {
    'controlled state': [
      { name: 'isOpen' },
      { ...func, name: 'onChange' },
      { name: 'open', type: { summary: 'Lens' } },
    ],
    trigger: [
      {
        name: 'Trigger',
        description:
          'The component that the popup attaches to. Must support refs. Defaults to a 0px div.',
        type: { summary: 'Component | string' },
        defaultValue: { summary: 'EmptyTrigger' },
      },
      { name: 'triggerProps', type: { summary: 'object' } },
      {
        name: 'label',
        description: 'Passed to `children` of the Trigger component',
        type: { summary: 'string' },
        defaultValue: { summary: "'dropdown'" },
      },
    ],
    popup: [
      {
        name: 'Popup',
        type: { summary: 'Component | string' },
        defaultValue: { summary: 'PopupBox' },
      },
      { name: 'popupProps', type: { summary: 'object' } },
      {
        name: 'placement',
        description:
          'Which side of the trigger the popup appears on (as long as it has space)',
        type: { summary: `'top' | 'bottom' | 'left' | 'right'` },
        defaultValue: { summary: "'bottom'" },
      },
      {
        name: 'side',
        type: { summary: `left' | 'right'` },
        defaultValue: { summary: "'left'" },
      },
      {
        name: 'children',
        description: 'Passed to `children` of the Popup component',
      },
    ],
  },
}
export default { title: 'Popover', component: Popover, parameters: { props } }

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
