/** @jsx jsx */
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react'
import DatePicker from 'react-date-picker'
import _ from 'lodash/fp'
import Icon from './Icon'
import {
  toDate,
  toDateWith,
  toHyphenatedDateString,
  pickerStyles,
  calendarStyles,
} from './dateUtils'
import theme from './theme'
let { inputStyle, fonts } = theme

let NativeDateInput = ({ value, onChange = _.noop, ...props }) => (
  <input
    type="date"
    onChange={e => onChange(toDate(e.target.value))}
    value={toDateWith(toHyphenatedDateString)(value)}
    css={[fonts.Text, inputStyle]}
    {...props}
  />
)

let ReactDatePickerInput = ({ value, ...props }) => (
  <DatePicker
    showLeadingZeros={false}
    disableClock // the clock is ugly and not interactible anyway
    calendarType={'US'}
    calendarIcon={<Icon icon="calendar_today" />}
    clearIcon={null}
    value={toDate(value)}
    css={{
      '.react-date-picker': pickerStyles,
      '.react-calendar': calendarStyles,
    }}
    {...props}
  />
)

let DateInput = ({ native = false, ...props }) =>
  native ? <NativeDateInput {...props} /> : <ReactDatePickerInput {...props} />

export default observer(DateInput)
