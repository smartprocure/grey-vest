/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import OutsideClickHandler from 'react-outside-click-handler'
import { observer } from 'mobx-react'
import Box from './Box'
import theme from './theme'
import { openBinding, expandProp } from './utils'

let makePopover = padding =>
  _.flow(
    expandProp('open', openBinding),
    observer
  )(
    ({ isOpen, onClose = _.noop, ...props }) =>
      isOpen && (
        <OutsideClickHandler onOutsideClick={_.debounce(0, onClose)}>
          <Box.Popup
            {...padding}
            css={{
              position: 'absolute',
              maxWidth: theme.widths.popup.max,
              minWidth: theme.widths.popup.min,
            }}
            {...props}
          />
        </OutsideClickHandler>
      )
  )

let Popover = makePopover({ px: 2, py: 1 })
Popover.displayName = 'Popover'
export default Popover

export let Dropdown = makePopover({ p: 0 })
Dropdown.displayName = 'Dropdown'
