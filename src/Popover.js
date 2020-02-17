/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, useState, createContext } from 'react'
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
    padding={['sm', 'md']}
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

export let PopoverContext = createContext()

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
    placement = 'bottom-left',
    label = 'dropdown',
    isOpen: controlledIsOpen,
    onChange: controlledOnChange,
    keepOpen,
    children,
    ...props
  }) => {
    let state = useState(false)
    let [isOpen, onChange] =
      controlledIsOpen === undefined
        ? state
        : [controlledIsOpen, controlledOnChange]
    let close = () => onChange(false)
    return (
      <TooltipTrigger
        trigger="click"
        tooltipShown={isOpen}
        onVisibilityChange={onChange}
        modifiers={{
          preventOverflow: { boundariesElement: 'document' },
          offset: { offset: `0, ${theme.spaces.xs}` },
        }}
        tooltip={({ tooltipRef, getTooltipProps }) => (
          <Popup
            {...getTooltipProps({
              ...popupProps,
              onClick: _.over([!keepOpen && close, popupProps.onClick]),
              ref: tooltipRef,
            })}
          >
            <PopoverContext.Provider value={[isOpen, onChange]}>
              {F.callOrReturn(children, close)}
            </PopoverContext.Provider>
          </Popup>
        )}
        {...{ placement, ...props }}
      >
        {({ getTriggerProps, triggerRef }) => (
          <Trigger
            {...getTriggerProps({
              ...F.callOrReturn(triggerProps, isOpen),
              ref: triggerRef,
            })}
          >
            {F.callOrReturn(label, isOpen)}
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
  'keepOpen',
  'children',
]

// We don't actually want to pass popupProps through to Dialog and Dropdown,
// but we need it to customize Dropdown
let buttonPopover = popupProps => ({
  trigger = 'button',
  icon = open =>
    ({ button: `arrow_drop_${open ? 'up' : 'down'}`, icon: 'more_vert' }[
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
