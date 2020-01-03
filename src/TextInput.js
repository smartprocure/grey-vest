/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme, { inputStyle } from './theme'
let { colors } = theme

let TextInput = ({ type = 'text', disabled, ...props }, ref) => (
  <input
    {...{ type, ref, disabled, ...props }}
    css={inputStyle}
  />
)

export default _.flow(
  React.forwardRef,
  observer
)(TextInput)
