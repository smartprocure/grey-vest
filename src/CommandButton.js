import React from 'react'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import Button from './Button'

export let Command = F.aspects.command(x => y => extendObservable(y, x))

let CommandButton = ({ command, children, disabled, icon, ...props }) => {
  let isStatus = _.eq(command.state.status)
  if (isStatus('failed') && command.state.error !== null) {
    console.error(command.state.error)
  }
  return (
    <Button
      onClick={command}
      disabled={command.state.processing || disabled}
      icon={_.getOr(icon, command.state.status, {
        processing: null,
        succeeded: 'check_circle',
        failed: 'error',
      })}
      {...props}
      // These flags should take precedence over any in props
      success={isStatus('succeeded')}
      danger={isStatus('failed')}
    >
      {_.startCase(command.state.status) || children}
      {isStatus('processing') && '...'}
    </Button>
  )
}

export default observer(CommandButton)
