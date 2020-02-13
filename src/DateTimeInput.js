/** @jsx jsx */
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react'
import DatePicker from 'react-datetime-picker'
import _ from 'lodash/fp'
import IconButton from './IconButton'
import {
  toDate,
  toDateWith,
  toLocalISOString,
  pickerStyles,
  calendarStyles,
} from './dateUtils'
import theme from './theme'
let { inputStyle, fonts } = theme

let NativeDateInput = ({ value, onChange = _.noop, ...props }) => (
  <input
    type="datetime-local"
    onChange={x => onChange(toDate(x.target.value))}
    value={toDateWith(toLocalISOString)(value)}
    {...props}
    css={[fonts.Text, inputStyle]}
  />
)

let ReactDatePickerInput = ({ value, ...props }) => (
  <DatePicker
    showLeadingZeros={false}
    disableClock // the clock is ugly and not interactible anyway
    calendarType={'US'}
    calendarIcon={<IconButton icon="calendar_today" />}
    clearIcon={null}
    value={toDate(value)}
    css={{
      '.react-datetime-picker': pickerStyles,
      '.react-calendar': calendarStyles,
    }}
    {...props}
  />
)

let DateInput = ({ native = false, ...props }) =>
  native ? <NativeDateInput {...props} /> : <ReactDatePickerInput {...props} />

export default observer(DateInput)
