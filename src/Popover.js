/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import F from 'futil'
import Box from './Box'
import Button from './Button'
import IconButton from './IconButton'

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

let Trigger = ({ getTriggerProps, triggerRef }) => (
  <Button {...getTriggerProps({ ref: triggerRef })}>hello world</Button>
)

export let Popover = ({
  trigger = Trigger,
  side = 'left',
  children,
}) => (
  <TooltipTrigger
    trigger="click"
    placement={`bottom-${side === 'right' ? 'end' : 'start'}`}
    tooltip={({ tooltipRef, getTooltipProps }) => (
      <Box
        popup
        padding={0}
        css={{ marginTop: 4 }}
        {...getTooltipProps({ ref: tooltipRef })}
      >
        {children}
      </Box>
    )}
  >
    {trigger}
  </TooltipTrigger>
)

export let Dropdown = Popover
