import React from 'react'
import { Flex, Dialog, Icon } from '..'
import { lipsum } from './utils'
import { func } from './commonProps'

let propSections = {
  'controlled state': [
    { name: 'isOpen' },
    { ...func, name: 'onChange' },
    { name: 'open', type: { summary: 'Lens' } },
  ],
  trigger: [
    {
      name: 'label',
      description: 'Text on the trigger button',
      type: { summary: 'string' },
      defaultValue: { summary: "'dropdown'" },
    },
  ],
  popup: [
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
      description: 'Rendered inside the popup',
    },
  ],
}
export default {
  title: 'Dialog',
  component: Dialog,
  parameters: { propSections },
}

let Center = props => (
  <Flex gap="md" justifyContent="space-around" alignItems="center" {...props} />
)

export let usage = () => (
  <Dialog label="hello world" icon="toys">
    Dialog content
  </Dialog>
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

export let functionProps = () => (
  <Dialog
    label={open => (open ? 'good morning' : 'good night')}
    icon={open => (open ? 'wb_sunny' : 'brightness_3')}
    placement="top"
    secondary={open => !open}
    ghost={open => open}
  >
    <marquee>
      <Icon large icon="🌞" />
    </marquee>
  </Dialog>
)
