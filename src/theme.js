import F from 'futil'
import _ from 'lodash/fp'

let spaces = { xs: 4, sm: 8, md: 16, lg: 32 }
let space = F.ifElse(_.isNumber, n => n * 8, F.aliasIn(spaces))
let widths = {
  modal: 600,
  calendar: 312,
  lg: 432, // maximum for table column, form field
  md: 280, // used for table column & form field; maximum for popup
  sm: 200, // used for form field
  xs: 128, // minimum for popup, table column, form field
}

let theme = {
  spaces,
  space,
  widths: {
    ...widths,
    popup: { max: widths.md, min: widths.xs },
    tableColumn: { max: widths.lg, min: widths.xs },
    formField: { max: widths.lg, min: widths.xs },
  },
  colors: {
    primaries: ['#0076de', '#0061b6', '#004c8e', '#b9d9f6'],
    secondaries: ['#3a3f52', '#272c41', '#202536'],
    neutrals: [
      '#ffffff',
      '#f9f9f9',
      '#f4f4f4',
      '#ededed',
      '#e8e8e8',
      '#d3d3d3',
      '#aaaaaa',
      '#777777',
      '#454545',
    ],
    errors: ['#ff5630', '#de350b', '#bf2600', '#ffbdad'],
    successes: ['#5bb85b', '#4b974b', '#3a763a', '#a5d8a5'],
    infos: ['#6554c0', '#5243aa', '#403294', '#c0b6f2'],
    warning: '#ffab00',
  },
  fontSizes: [12, 14, 16, 18, 30, 48],
  lineHeights: [1, 1.15, 1.25, 1.5, 1.7, 1.75],
  fontFamily: 'Lato',
  borderRadius: 3,
}

theme.boxShadows = {
  normal: `0 2px 10px 0 ${theme.colors.neutrals[8]}19`,
  modal: `0 2px 10px 0 ${theme.colors.secondaries[1]}7f`,
  popup: `0 8px 16px -4px ${theme.colors.secondaries[1]}4c,
          0 0 1px 0 ${theme.colors.secondaries[1]}4c`,
}

theme.fonts = {
  Title: {
    // Page titles
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes[4],
    lineHeight: theme.lineHeights[2],
    fontWeight: 300,
    letterSpacing: 'normal',
    variants: {
      // Extra large numerical callouts
      large: {
        fontSize: theme.fontSizes[5],
        lineHeight: theme.lineHeights[0],
        letterSpacing: -0.05,
      },
      // Modal & tab titles
      small: {
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[5],
        fontWeight: 600,
      },
    },
  },
  Subtitle: {
    // Regular size buttons, main nav section
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights[0],
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    variants: {
      // Section headers, subsections within pages, large buttons
      large: {
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[2],
      },
    },
  },
  Text: {
    // Default body copy, table copy, general text
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes[2],
    lineHeight: theme.lineHeights[5],
    fontWeight: 400,
    letterSpacing: 'normal',
    variants: {
      // Table header & footer, field labels, dropdown items, compact buttons, pagination, banner copy
      small: {
        fontSize: theme.fontSizes[1],
        lineHeight: theme.lineHeights[4],
      },
      // Tooltips, validation messages
      extraSmall: {
        fontSize: theme.fontSizes[0],
        lineHeight: theme.lineHeights[3],
      },
    },
  },
}

theme.inputStyle = {
  borderRadius: theme.borderRadius,
  border: `2px solid ${theme.colors.neutrals[3]}`,
  padding: `${theme.spaces.xs}px ${theme.spaces.sm}px`,
  outline: 'none',
  '&:focus': { borderColor: theme.colors.primaries[0] },
  transition: 'border-color 0.2s ease-in',
  '::placeholder': { color: theme.colors.neutrals[8], opacity: 0.5 },
  color: theme.colors.neutrals[8],
  backgroundColor: theme.colors.neutrals[0],
  height: theme.space(5),
  boxSizing: 'border-box',
  minWidth: theme.widths.formField.min,
  maxWidth: theme.widths.formField.max,
  ...theme.fonts.Text,
  '&:disabled': {
    borderColor: theme.colors.neutrals[2],
    backgroundColor: theme.colors.neutrals[2],
  },
}

export default theme
