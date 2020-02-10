import React from 'react'
import { ErrorText } from '..'

export default { title: 'ErrorText', component: ErrorText }

export let story = () => (
  <ErrorText>
    Type <b>nodetype</b> is not supported (for key <i>nodekey</i>)
  </ErrorText>
)
