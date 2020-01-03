/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import moment from 'moment'
import DatePicker from 'react-datetime-picker'
import _ from 'lodash/fp'
import theme, { inputStyle, fonts } from './theme'

let NativeDateInput = ({ value, onChange = _.noop, ...props }) => (
  <input
    type="datetime-local"
    value={value ? moment(value).format('YYYY-MM-DD') : ''}
    onChange={e => onChange(new Date(e.target.value))}
    {...props}
    css={inputStyle}
  />
)

let ReactDatePickerInput = ({
  value,
  calendarIcon = null,
  clearIcon = null,
  ...props
}) => (
  <DatePicker
    disableClock // the clock is ugly and not interactible anyway
    calendarType={'US'}
    calendarIcon={calendarIcon}
    clearIcon={clearIcon}
    value={_.isDate(value) || _.isEmpty(value) ? value : ''}
    css={[
      {
        '.react-datetime-picker': {
          '&__wrapper': _.pick(
            ['border', 'borderRadius', 'padding', 'height', 'boxSizing'],
            inputStyle
          ),
          '&__inputGroup': {
            '&__input, &__leadingZero, &__divider': {
              border: 'none',
              outline: 'none',
              ...fonts.Text,
            },
          },
        },
        '.react-calendar': {
          width: `${theme.breakpoints.calendarWidth}px !important`,
          border: 0,
          padding: theme.spaces.md,
          borderRadius: theme.borderRadius,
          boxShadow: theme.boxShadows.popup,
          '&__navigation': {
            height: 'auto',
            marginBottom: theme.spaces.sm,
            ...fonts.Text,
            '& button': { borderRadius: theme.borderRadius },
            '&__label': {
              ...fonts.Text.variants.small,
              fontWeight: 500,
              color: theme.colors.primaries[0],
              flex: 1,
            },
            '&__arrow': {
              minWidth: theme.spaces.lg,
              fontSize: theme.fontSizes[2],
              color: theme.colors.secondaries[1],
              opacity: 0.5,
            },
          },
          '&__tile': {
            ...fonts.Text,
            ...fonts.Text.variants.small,
            color: theme.colors.secondaries[0],
            '& abbr': { opacity: 0.5 },
            '&:hover abbr': { opacity: 1 },
            padding: 0,
            height: theme.spaces.lg,
            borderRadius: theme.borderRadius,
            '&--now abbr': {
              width: 24,
              opacity: 1,
              display: 'inline-block',
              boxShadow: `0 2px 0 0 ${theme.colors.primaries[0]}`,
            },
            '&--active': {
              backgroundColor: theme.colors.secondaries[1],
              '&:hover': {
                backgroundColor: `${theme.colors.secondaries[0]} !important`,
              },
              color: theme.colors.neutrals[0],
              '& abbr': { opacity: 1 },
            },
          },
          '&__month-view': {
            '&__days__day--neighboringMonth': { opacity: 0.6 },
            '&__weekdays__weekday': {
              ...fonts.Text,
              ...fonts.Text.variants.extraSmall,
              '& abbr': { textDecoration: 'none' },
            },
          },
        },
      },
    ]}
    {...props}
  />
)

let DateInput = ({ native = false, ...props }) =>
  native ? <NativeDateInput {...props} /> : <ReactDatePickerInput {...props} />

export default observer(DateInput)
