import { margin } from 'polished'
import _ from 'lodash/fp'
import theme from './theme'
let { inputStyle, fonts, colors } = theme

export let utcDate = d =>
  new Date(d.valueOf() - 1000 * 60 * d.getTimezoneOffset())

export let toLocalISOString = x => _.trimCharsEnd('Z', utcDate(x).toISOString())

export let toHyphenatedDateString = d =>
  _.flow(
    _.map(_.padCharsStart('0', 2)),
    _.join('-')
  )([d.getFullYear(), d.getMonth() + 1, d.getDate()])

export let toDateWith = f => value =>
  isNaN(Date.parse(value)) ? '' : f(new Date(value))

export let toDate = toDateWith(_.identity)

export let pickerStyles = {
  '&__wrapper': {
    ...inputStyle,
    display: 'flex',
    alignItems: 'center',
  },
  '&__button': {
    outline: 'none',
    color: colors.neutralDark,
    padding: 0,
    paddingLeft: theme.spaces.sm,
  },
  '&__inputGroup': {
    display: 'flex',
    alignItems: 'baseline',
    '&__input, &__leadingZero': {
      border: 'none',
      outline: 'none',
      color: colors.text,
      ...fonts.Text,
    },
  },
}

export let calendarStyles = {
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
}
