/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import _ from 'lodash/fp'
import { setDisplayName } from 'recompose'
import { observer } from 'mobx-react'
import Portal from './Portal'
import Box from './Box'
import Flex from './Flex'
import theme from './theme'
import { Title, Text } from './Typography'
import { openBinding, expandProp } from './utils'

let Modal = _.flow(
  setDisplayName('Modal'),
  expandProp('open', openBinding),
  observer
)(({ isOpen, onClose, children, style = {}, className = '' }) => (
  <Portal>
    {isOpen && (
      <Flex
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: `${theme.colors.secondaries[1]}99`, // 0.6 opacity
          zIndex: 1000,
        }}
        justifyContent="center"
        alignItems="center"
        onClick={onClose}
      >
        <Box
          variant="modal"
          p={2.5}
          onClick={e => e.stopPropagation()}
          css={{ minWidth: 400, maxWidth: 600 }}
        >
          {children}
        </Box>
      </Flex>
    )}
  </Portal>
))

export default Modal

Modal.Header = ({ children }) => (
  <Title small css={{ marginBottom: theme.spaces.xs }}>
    {children}
  </Title>
)

Modal.Footer = ({ children }) => (
  <Flex
    alignItems="center"
    justifyContent="flex-end"
    css={{
      marginTop: theme.space(2.5),
      '& > button': { marginRight: theme.spaces.sm },
      '& > button:last-child': { marginRight: 0 },
    }}
  >
    {children}
  </Flex>
)

Modal.Content = props => (
  <div
    css={{
      paddingRight: '20%',
      '& > *:first-child': { marginTop: 0 },
      overflowY: 'auto',
      maxHeight: `min(600px, 60vh)`
    }}
    {...props}
  /> // 432px wide
)
