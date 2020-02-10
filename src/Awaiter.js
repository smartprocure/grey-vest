import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { rgba } from 'polished'
import Async from 'react-async'
import { Modal, ModalHeader, ModalContent, ModalFooter } from './Modal'
import Button from './Button'
import LoadingSpinner from './StripedLoader'
import CommandButton, { Command } from './CommandButton'
import theme from './theme'

let Error = ({ error: { message: errors = [] } }) => {
  let toggle = React.useState(false)
  return (
    <>
      <Button danger onClick={F.on(toggle)}>
        Error!
      </Button>
      <Modal open={toggle}>
        <ModalHeader>An error has occurred!</ModalHeader>
        <ModalContent>
          {F.mapIndexed(
            (error, index) => (
              <pre
                key={index}
                style={{
                  backgroundColor: rgba(theme.colors.error, 0.1),
                  overflowX: 'auto',
                  color: theme.colors.error,
                  margin: `${theme.spaces.xs}px 0`,
                  padding: `0 ${theme.spaces.sm}px`,
                }}
              >
                {error}
              </pre>
            ),
            _.castArray(errors)
          )}
        </ModalContent>
        <ModalFooter>
          <Button onClick={F.off(toggle)}>Close</Button>
          <CommandButton
            primary
            command={Command(() =>
              navigator.clipboard.writeText(_.join('\n', errors))
            )}
          >
            Copy Text
          </CommandButton>
        </ModalFooter>
      </Modal>
    </>
  )
}

let AsyncDefaults = ({
  promiseFn,
  LoadingComponent = LoadingSpinner,
  children,
  ErrorComponent = Error,
  ...awaiterProps
}) => (
  <Async promiseFn={promiseFn} {...awaiterProps}>
    {({ data, error, isLoading, ...props }) => {
      if (isLoading) return <LoadingComponent />
      if (error) {
        console.error('AsyncDefaults error', error)
        return <ErrorComponent error={error} />
      }
      return children(data, props)
    }}
  </Async>
)
export default AsyncDefaults
