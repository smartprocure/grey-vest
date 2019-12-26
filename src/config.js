export let colors = {
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
  warning: '#ffab00'
}

export let fontFamilies = { primary: 'Lato' }

let common = {
  fontFamily: fontFamilies.primary,
  fontStyle: 'normal',
  fontStretch: 'normal',
}

export let fonts = {
  Title: {
    // Page titles
    ...common,
    fontSize: 30,
    lineHeight: 1.25,
    fontWeight: 300,
    color: colors.secondaries[0],
    letterSpacing: 'normal',
    variants: {
      // Extra large numerical callouts
      large: {
        fontSize: 48,
        lineHeight: 1,
        letterSpacing: -0.05,
      },
      // Modal & tab titles
      small: {
        fontSize: 18,
        lineHeight: 1.75,
        fontWeight: 'bold',
      },
    },
  },
  Subtitle: {
    // Regular size buttons, main nav section
    ...common,
    fontSize: 14,
    lineHeight: 1,
    fontWeight: 'bold',
    color: colors.secondaries[0],
    letterSpacing: 2,
    textTransform: 'uppercase',
    variants: {
      // Section headers, subsections within pages, large buttons
      large: {
        fontSize: 18,
        lineHeight: 1.5,
      },
    },
  },
  Text: {
    // Default body copy, table copy, general text
    ...common,
    fontSize: 16,
    lineHeight: 1.75,
    fontWeight: 'normal',
    color: colors.neutrals[8],
    letterSpacing: 'normal',
    variants: {
      // Table header & footer, field labels, dropdown items, compact buttons, pagination, banner copy
      small: {
        fontSize: 14,
        lineHeight: 1.7,
      },
      // Tooltips, validation messages
      extraSmall: {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
  },
}
