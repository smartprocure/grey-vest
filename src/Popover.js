/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { setDisplayName, defaultProps } from 'recompose'
import _ from 'lodash/fp'
import OutsideClickHandler from 'react-outside-click-handler'
import { observer } from 'mobx-react'
import { openBinding, expandProp } from './utils'
import Box from './Box'
import theme from './theme'

let Popover = _.flow(
  setDisplayName('Popover'),
  expandProp('open', openBinding),
  observer
)(
  ({ isOpen, onClose = _.noop, p = 2, children, style }) =>
    isOpen && (
      <OutsideClickHandler onOutsideClick={_.debounce(0, onClose)}>
        <Box
          variant="popup"
          p={p}
          css={{
            position: 'absolute',
            maxWidth: theme.space(35), // 280px
            minWidth: theme.space(16), // 128px
          }}
        >
          {children}
        </Box>
      </OutsideClickHandler>
    )
)

export default Popover

export let Dropdown = defaultProps({ p: 0 })(Popover)
