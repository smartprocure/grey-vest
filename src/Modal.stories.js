import React from 'react'
import F from 'futil'
import { useLensObject } from './utils'
import { Modal, Button, Dropdown, DropdownItem, Text } from '.'
import decorator from './stories/decorator'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [decorator],
}

export let withHeaderAndFooter = () => {
  let open = React.useState(false)
  return (
    <>
      <Modal open={open}>
        <Modal.Header>Hello world</Modal.Header>
        <Modal.Content>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis elit posuere, ornare sem mattis, lobortis nisl. Mauris ut neque
            tellus. Fusce et mollis odio. Quisque auctor vitae ex vel pharetra.
            Pellentesque tincidunt elit vitae tristique maximus. Vestibulum
            lacinia erat nibh, eget tristique enim laoreet eget. Aliquam nec
            fermentum lorem, vel facilisis nulla. Etiam vitae mi elit. In eu
            maximus felis. Duis aliquet scelerisque libero. Sed luctus dignissim
            ante, vel facilisis erat. Aenean leo purus, aliquam posuere purus
            sed, placerat bibendum libero. Etiam ex enim, dignissim quis magna
            non, porttitor dapibus augue. Aliquam vel convallis turpis. Donec a
            magna at sem porttitor euismod vel eget est.
          </Text>
          <Text as="p">
            Pellentesque a elit sodales, gravida magna sit amet, lacinia odio.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vivamus et cursus sem. In varius lobortis finibus. Donec posuere
            metus sed mollis pulvinar. Donec eget sollicitudin enim. Nunc ligula
            turpis, aliquet a lacus iaculis, cursus sodales nunc. Proin et
            pretium diam. Nulla facilisi.
          </Text>
          <Text as="p">
            Phasellus accumsan vehicula nulla, non pellentesque dolor fringilla
            vel. Nullam id risus mauris. In id maximus leo. Nam vel ipsum quis
            nunc imperdiet porttitor. Nam viverra, lectus rhoncus tristique
            condimentum, urna eros feugiat nunc, nec tincidunt felis dolor sit
            amet orci. Mauris bibendum lectus non neque venenatis ultrices. Sed
            vel orci metus. Praesent mollis orci cursus, ultrices eros vitae,
            posuere magna.
          </Text>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={F.off(open)}>cancel</Button>
          <Button.Primary onClick={F.off(open)}>confirm</Button.Primary>
        </Modal.Footer>
      </Modal>
      <Button onClick={F.on(open)}>Open Modal</Button>
    </>
  )
}

export let withOpenProp = () => {
  let open = React.useState(false)
  return (
    <>
      <Modal open={open}>Some Modal Content</Modal>
      <Button onClick={F.on(open)}>Open Modal</Button>
    </>
  )
}
withOpenProp.story = { name: "With 'open' prop" }

export let withIsOpenOnCloseProps = () => {
  let [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Some Modal Content
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </>
  )
}
withIsOpenOnCloseProps.story = { name: "With 'isOpen'/'onClose' props" }

export let fromPopover = () => {
  let open = useLensObject({ modal: false, popover: false })
  return (
    <div style={{ paddingBottom: 32 }}>
      <Text small style={{ marginBottom: 16 }}>
        Demonstrates how to use modals inside of popovers. Ideally, the modal
        component should live outside the popover even if its opener is inside
        the popover, but in cases where it's absolutely necessary, modals can
        survive inside of popovers as long as steps are taken to keep the
        popover open as long as the modal is.
      </Text>
      <Button onClick={F.on(open.popover)}>Open Popover</Button>
      <Dropdown
        isOpen={F.view(open.popover)}
        onClose={() => !F.view(open.modal) && F.off(open.popover)()}
      >
        <DropdownItem onClick={F.on(open.modal)}>Open Modal</DropdownItem>
        <Modal open={open.modal}>Some modal content</Modal>
      </Dropdown>
    </div>
  )
}
