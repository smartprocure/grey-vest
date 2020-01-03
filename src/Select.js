/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import ReactSelect from 'react-select'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import { inputStyle } from './theme'

let Select = ({ options, native = true, placeholder = 'Please Select...', ...props }, ref) =>
  native ? (
    <select {...props} ref={ref} css={[inputStyle, { height: 40 }]}>
      {placeholder && <option value="">{placeholder}</option>}
      {_.map(
        x => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ),
        options
      )}
    </select>
  ) : (
    <ReactSelect {...{ options, placeholder, ref, ...props }} />
  )

export default _.flow(
  React.forwardRef,
  observer
)(Select)
