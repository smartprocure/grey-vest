/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme from './theme'

let Textarea = ({ onChange, ...props }, ref) => (
  <textarea
    onChange={e => onChange(e.target.value)}
    {...props}
    ref={ref}
    rows={4}
    css={[theme.inputStyle, theme.fonts.Text, { height: 'auto' }]}
  />
)

export default _.flow(
  React.forwardRef,
  observer
)(Textarea)
