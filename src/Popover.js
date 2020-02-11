/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, forwardRef, cloneElement } from 'react'
import F from 'futil'
import Box from './Box'
import Button from './Button'
import IconButton from './IconButton'
import theme from './theme'

// import { Manager, Reference, Popper } from 'react-popper'

// export let Popover = ({
//   label = 'dropdown',
//   side = 'left',
//   trigger = 'button',
//   triggerProps,
//   children,
// }) => {
//   let open = useState(false)
//   let allTriggerProps = {
//     onClick: F.flip(open),
//     icon:
//       trigger === 'button'
//         ? `arrow_drop_${F.view(open) ? 'up' : 'down'}`
//         : 'more_vert',
//     ...F.callOrReturn(triggerProps, F.view(open)),
//   }
//   let Trigger = trigger === 'button' ? Button : IconButton
//   return (
//     <Manager>
//       <Reference>
//         {({ ref }) => (
//           <Trigger {...{ ref, ...allTriggerProps }}>{label}</Trigger>
//         )}
//       </Reference>
//       <Popper placement={`bottom-${side === 'right' ? 'end' : 'start'}`}>
//         {({ ref, style }) =>
//           F.view(open) && (
//             <Box
//               popup
//               padding={0}
//               css={{ marginTop: 4 }}
//               {...{ ref, style, children }}
//             />
//           )
//         }
//       </Popper>
//     </Manager>
//   )
// }

import TooltipTrigger from 'react-popper-tooltip'

let PopupBox = forwardRef((props, ref) => (
  <Box popup paddingX={2} paddingY={1} ref={ref} {...props} />
))

// TODO: expand the API for triggerProps and tooltipProps to include functions
// of `isToggled` to props in addition to a props object

// Note: we use triggerProps and tooltipProps mostly because the component
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
  icon,
  buttonProps,
  ...props
}) => (
  <Popover
    Trigger={{ button: Button, icon: IconButton }[trigger]}
    triggerProps={{
      children: label,
      icon: icon || { button: 'arrow_drop_down', icon: 'more_vert' }[trigger],
      ...buttonProps,
    }}
    Popup={Box}
    popupProps={{ popup: true, padding: 0 }}
    {...props}
  />
)
