/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, useState } from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import { setDisplayName } from 'recompose'
import { observer } from 'mobx-react'
import F from 'futil'
import _ from 'lodash/fp'
import Box from './Box'
import Button from './Button'
import IconButton from './IconButton'
import theme from './theme'
import { openBinding, expandProp } from './utils'

let PopupBox = forwardRef((props, ref) => (
  <Box
    popup
    css={{
      minWidth: theme.widths.popup.min,
      maxWidth: theme.widths.popup.max,
    }}
    padding={[1, 2]}
    ref={ref}
    {...props}
  />
))

let EmptyTrigger = forwardRef((props, ref) => (
  <div
    css={{ width: 0, height: 0, overflow: 'hidden' }}
    {...{ ref, ...props }}
  />
))

// TODO: expand the API for triggerProps and popupProps to include functions
// of `isToggled` to props in addition to a props object
export let Popover = _.flow(
  setDisplayName('Popover'),
  expandProp('open', openBinding),
  observer
)(
  ({
    Trigger = EmptyTrigger,
    Popup = PopupBox,
    triggerProps = {},
    popupProps = {},
    placement,
    side = placement ? '' : 'left',
    label = 'dropdown',
    isOpen: controlledIsOpen,
    onChange: controlledOnChange,
    children,
    ...props
  }) => {
    let state = useState(false)
    let [isOpen, onChange] =
      controlledIsOpen === undefined
        ? state
        : [controlledIsOpen, controlledOnChange]
    return (
      <TooltipTrigger
        trigger="click"
        tooltipShown={isOpen}
        onVisibilityChange={onChange}
        placement={F.compactJoin('-', [
          placement || 'bottom',
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
          <Trigger
            {...getTriggerProps({
              ...F.callOrReturn(triggerProps, isOpen),
              ref: triggerRef,
            })}
          >
            {label}
          </Trigger>
        )}
      </TooltipTrigger>
    )
  }
)

let parentProps = [
  'label',
  'placement',
  'side',
  'isOpen',
  'onChange',
  'open',
  'children',
]

// We don't actually want to pass popupProps through to Dialog and Dropdown,
// but we need it to customize Dropdown
let buttonPopover = popupProps => ({
  trigger = 'button',
  icon = open =>
    ({ button: open ? 'arrow_drop_up' : 'arrow_drop_down', icon: 'more_vert' }[
      trigger
    ]),
  ...props
}) => (
  <Popover
    Trigger={{ button: Button, icon: IconButton }[trigger]}
    triggerProps={open =>
      _.mapValues(x => F.callOrReturn(x, open), {
        icon,
        ..._.omit(parentProps, props),
      })
    }
    {...{ popupProps, ..._.pick(parentProps, props) }}
  />
)

// These two are actually identical except for the padding inside the popup
export let Dialog = buttonPopover()
export let Dropdown = buttonPopover({ padding: 0 })
