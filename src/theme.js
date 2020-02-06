import F from 'futil'
import _ from 'lodash/fp'

let theme = {
  fontSizes: [12, 14, 16, 18, 30, 48],
  lineHeights: [1, 1.15, 1.25, 1.5, 1.7, 1.75],
  fontFamily: 'Lato',
  borderRadius: 3,
}

theme.spaces = { xs: 4, sm: 8, md: 16, lg: 32 }
theme.space = F.ifElse(_.isNumber, n => n * 8, F.aliasIn(theme.spaces))

let widths = {
  modal: 600,
  calendar: 312,
  lg: 432, // maximum for table column, form field
  md: 280, // used for table column & form field; maximum for popup
  sm: 200, // used for form field
  xs: 128, // minimum for popup, table column, form field
}
theme.widths = {
  ...widths,
  popup: { max: widths.md, min: widths.xs },
  tableColumn: { max: widths.lg, min: widths.xs },
  formField: { max: widths.lg, min: widths.xs },
}

let colors = {
  // 2 is only used on button hover; 1 is also used on PagerItem hover
  primaries: ['#0076de', '#0061b6', '#004c8e'],
  neutrals: {
    0: '#ffffff',
    1: '#f9f9f9', // page background only
    4: '#eaeaea', // input borders, tag background, hovered fields like PagerItem, table header border, tab background
    5: '#d3d3d3', // tag hover, secondary button hover, ghost button active, disabled checkbox color (0.5 opacity), tab borders & active background color, textButton active background color
    6: '#aaaaaa', // radiobutton & checkbox borders, secondary button active
    8: '#454545', // text color (0.5 opacity for some things, other opacity for tab titles)
  },
  errors: [
    '#ff5630', // only error button active
    '#de350b', // most error stuff
    '#bf2600', // only error button hover
  ],
  successes: ['#5bb85b', '#4b974b', '#3a763a'], // none of these are used anywhere
  infos: ['#6554c0', '#5243aa', '#403294'], // possible InfoButton
}
theme.colors = {
  ...colors,
  primary: '#0076de',
  text: colors.neutrals[8],
  // secondaries
  secondary: '#272c41',
  // backgrounds
  white: colors.neutrals[0],
  pageBackground: colors.neutrals[1],
  // neutrals
  neutralLight: colors.neutrals[4],
  neutral: colors.neutrals[5],
  neutralDark: colors.neutrals[6],
  // others
  error: colors.errors[1],
  info: colors.infos[0],
  warning: '#ffab00',
  pastels: {
    primary: '#b9d9f6',
    error: '#ffbdad',
    info: '#c0b6f2',
    success: '#a5d8a5',
  },
}

theme.boxShadows = {
  normal: `0 2px 10px 0 ${theme.colors.neutrals[8]}19`,
  modal: `0 2px 10px 0 ${theme.colors.secondary}7f`,
  popup: `0 8px 16px -4px ${theme.colors.secondary}4c,
          0 0 1px 0 ${theme.colors.secondary}4c`,
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
  ...theme.fonts.Text,
  transition: 'border-color 0.2s ease-in',
  // borders & padding
  borderRadius: theme.borderRadius,
  border: `2px solid ${theme.colors.neutrals[4]}`,
  padding: `${theme.spaces.xs}px ${theme.spaces.sm}px`,
  outline: 'none',
  '&:focus': { borderColor: theme.colors.primaries[0] },
  // dimensions
  height: theme.space(5),
  boxSizing: 'border-box',
  minWidth: theme.widths.formField.min,
  // colors
  '::placeholder': { color: theme.colors.neutrals[8], opacity: 0.5 },
  color: theme.colors.neutrals[8],
  backgroundColor: theme.colors.neutrals[0],
  '&:disabled': {
    borderColor: theme.colors.neutrals[4],
    backgroundColor: theme.colors.neutrals[4],
    color: theme.colors.secondary,
    opacity: 0.5,
  },
}

export default theme
