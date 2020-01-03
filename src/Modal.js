/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { setDisplayName } from 'recompose'
import { observer } from 'mobx-react'
import Portal from './Portal'
import Box from './Box'
import Flex from './Flex'
import Icon from './Icon'
import theme from './theme'
import { Title } from './Typography'
import { openBinding, expandProp } from './utils'

let Modal = _.flow(
  setDisplayName('Modal'),
  expandProp('open', openBinding),
  observer
)(({ isOpen, onClose, children, ...props }) => (
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
          p={3}
          onClick={e => e.stopPropagation()}
          css={{ minWidth: 400, maxWidth: 600, position: 'relative' }}
          {...props}
        >
          <Icon
            icon="close"
            style={{
              position: 'absolute',
              top: theme.spaces.sm,
              right: theme.spaces.sm,
              cursor: 'pointer',
              padding: theme.spaces.xs,
            }}
            size={3}
            onClick={onClose}
          />
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
      marginTop: theme.space(3),
      '& > *': { marginRight: theme.spaces.sm },
      '& > *:last-child': { marginRight: 0 },
    }}
  >
    {children}
  </Flex>
)

Modal.Content = props => (
  <div
    css={{
      paddingRight: '20%',
      '& > *:first-of-type': { marginTop: 0 },
      overflowY: 'auto',
      // According to our style guide, the max height is supposed to belong to the modal,
      // not the content, so it has been reduced a bit (from 800px/80vh) to compensate.
      // This greatly simplifies the implementation and has about the same visual effect.
      maxHeight: `min(600px, 60vh)`,
    }}
    {...props}
  />
)
