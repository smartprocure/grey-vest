import React from 'react'
import F from 'futil'
import { observable } from 'mobx'
import { Button, Popover } from '..'

export default { title: 'Popover', component: Popover }

export let withOpenProp = () => {
  let open = observable.box(false)
  return (
    <>
      <Button onClick={F.on(open)}>Open Popover</Button>
      <Popover open={open}>Some Popover Content</Popover>
    </>
  )
}
withOpenProp.story = { name: "With 'open' prop" }

export let withIsOpenOnCloseProps = () => {
  let [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div>isOpen: {isOpen.toString()}</div>
      <Button onClick={() => setIsOpen(x => !x)}>Open Popover</Button>
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={x => alert(`visibility changed to ${x}`)}
      >
        Some Popover Content
      </Popover>
    </>
  )
}
withIsOpenOnCloseProps.story = { name: "With 'isOpen'/'onClose' props" }

export let anchor = () => {
  let [isOpen, setIsOpen] = React.useState(true)
  return (
    <>
      <div>isOpen: {isOpen.toString()}</div>
      <Button onClick={() => setIsOpen(x => !x)}>Open Popover</Button>
      <Popover
        trigger={({ ref }) => <div ref={ref}>anchor of popover</div>}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={x => alert(`visibility changed to ${x}`)}
      >
        Some Popover Content
      </Popover>
      
    </>
  )
}
