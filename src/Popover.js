/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import Box from './Box'
import Button from './Button'
import IconButton from './IconButton'
import theme from './theme'

import TooltipTrigger from 'react-popper-tooltip'

let PopupBox = forwardRef((props, ref) => (
  <Box popup paddingX={2} paddingY={1} ref={ref} {...props} />
))

// TODO: expand the API for triggerProps and popupProps to include functions
// of `isToggled` to props in addition to a props object
export let Popover = ({
  Trigger = 'div',
  triggerProps = {},
  Popup = PopupBox,
  popupProps = {},
  placement = 'bottom',
  side = 'left',
  isOpen,
  onClose = () => {},
  children,
  ...props
}) => (
  <TooltipTrigger
    trigger="click"
    tooltipShown={isOpen}
    onVisibilityChange={open => !open && onClose()}
    placement={F.compactJoin('-', [
      placement,
      { left: 'start', right: 'end' }[side],
    ])}
    modifiers={{
      preventOverflow: { boundariesElement: 'document' },
      offset: { offset: `0, ${theme.spaces.xs}` },
    }}
    tooltip={({ tooltipRef, getTooltipProps }) => (
      <Popup {...getTooltipProps({ ...popupProps, ref: tooltipRef })}>
        {children}
      </Popup>
    )}
    {...props}
  >
    {({ getTriggerProps, triggerRef }) => (
      <Trigger {...getTriggerProps({ ...triggerProps, ref: triggerRef })} />
    )}
  </TooltipTrigger>
)

export let Dropdown = ({
  trigger = 'button',
  label = 'dropdown',
  icon = { button: 'arrow_drop_down', icon: 'more_vert' }[trigger],
  ...props
}) => {
  let parentProps = ['placement', 'side', 'children', 'isOpen', 'onClose']
  return (
    <Popover
      Trigger={{ button: Button, icon: IconButton }[trigger]}
      triggerProps={{ children: label, icon, ..._.omit(parentProps, props) }}
      Popup={Box}
      popupProps={{ popup: true, padding: 0 }}
      {..._.pick(parentProps, props)}
    />
  )
}
