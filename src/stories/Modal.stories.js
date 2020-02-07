import React from 'react'
import F from 'futil'
import { useLensObject } from '../utils'
import { Modal, Button, Dropdown, DropdownItem, Text } from '..'

export default { title: 'Modal', component: Modal }

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
          <Button primary onClick={F.off(open)}>confirm</Button>
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
      <Text small>
        <p>
          This story and the next one demonstrate how to use modals inside of
          self-closing popup components.
        </p>
        <p>
          Ideally, the modal component itself should live outside the popover
          even if the component that toggles its state is inside the popover. In
          this case, we don't have to worry about the modal disappearing or its
          state resetting when the popover is closed.
        </p>
      </Text>
      <Button onClick={F.on(open.popover)}>
        Open Popover (with modal outside)
      </Button>
      <Dropdown isOpen={F.view(open.popover)} onClose={F.off(open.popover)}>
        <DropdownItem onClick={F.on(open.modal)}>Open Modal</DropdownItem>
      </Dropdown>
      <Modal open={open.modal}>Modal outside the popover</Modal>
    </div>
  )
}

export let insidePopover = () => {
  let open = useLensObject({ modal: false, popover: false })
  return (
    <div style={{ paddingBottom: 32 }}>
      <Text small>
        <p>
          If necessary, modals can also live inside of self-closing popup
          components: the trick is to manually prevent the popover from closing
          as long as the modal is open. Note, however, that the <i>state</i> for
          whether the modal is open or closed should still live outside of the
          popover.
        </p>
      </Text>
      <Button onClick={F.on(open.popover)}>
        Open Popover (with modal inside)
      </Button>
      <Dropdown
        isOpen={F.view(open.popover)}
        onClose={() => !F.view(open.modal) && F.off(open.popover)()}
      >
        <DropdownItem onClick={F.on(open.modal)}>Open Modal</DropdownItem>
        <Modal open={open.modal}>Modal inside the popover</Modal>
      </Dropdown>
    </div>
  )
}
