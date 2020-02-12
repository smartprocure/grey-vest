/** @jsx jsx */
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react'
import { margin } from 'polished'
import DatePicker from 'react-datetime-picker'
import F from 'futil'
import _ from 'lodash/fp'
import Icon from './Icon'
import theme from './theme'
let { inputStyle, fonts, colors } = theme

let toLocalISOString = date =>
  _.flow(
    _.map(_.padCharsStart('0', 2)),
    x => _.zip(x, ['-', '-', 'T', ':', ':', '.']),
    _.flatten,
    F.compactJoin('')
  )([
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5),
  ])

let toDateWith = f => value =>
  isNaN(Date.parse(value)) ? '' : f(new Date(value))

let toDate = toDateWith(_.identity)

let NativeDateInput = ({ value, onChange = _.noop, ...props }) => (
  <input
    type="datetime-local"
    onChange={x => onChange(toDate(x.target.value))}
    value={toDateWith(toLocalISOString)(value)}
    {...props}
    css={inputStyle}
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
    css={[
      {
        '.react-datetime-picker': {
          '&__wrapper': inputStyle,
          '&__button': {
            outline: 'none',
            color: colors.neutralDark,
          },
          '&__inputGroup': {
            display: 'flex',
            alignItems: 'baseline',
            '&__input, &__leadingZero': {
              border: 'none',
              outline: 'none',
              paddingTop: 1,
              paddingBottom: 1,
              color: colors.text,
              ...fonts.Text,
            },
          },
        },
        '.react-calendar': {
          width: `${theme.widths.calendar}px !important`,
          border: 0,
          ...margin(theme.spaces.xs, 0),
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
              color: colors.primary,
              flex: 1,
            },
            '&__arrow': {
              minWidth: theme.spaces.lg,
              fontSize: theme.fontSizes[2],
              color: colors.secondary,
              opacity: 0.5,
            },
          },
          '&__tile': {
            ...fonts.Text,
            ...fonts.Text.variants.small,
            color: colors.secondary,
            '& abbr': { opacity: 0.5 },
            '&:hover': {
              backgroundColor: colors.neutrals[0],
              '& abbr': { opacity: 1 },
            },
            padding: 0,
            height: theme.spaces.lg,
            borderRadius: theme.borderRadius,
            // primary-colored underline on current day
            '&--now abbr': {
              width: 24,
              opacity: 1,
              display: 'inline-block',
              boxShadow: `0 2px 0 0 ${colors.primary}`,
            },
            '&--active': {
              backgroundColor: `${colors.secondary} !important`,
              color: colors.backgrounds[0],
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
