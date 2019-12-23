export let colors = {
  secondary1: '#272c41',
  neutral8: '#454545',
  success00: '#5bb85b'
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
    color: colors.secondary1,
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
      }
    }
  },
  Subtitle: {
    // Regular size buttons, main nav section
    ...common,
    fontSize: 14,
    lineHeight: 1,
    fontWeight: 'bold',
    color: colors.secondary1,
    letterSpacing: 2,
    textTransform: 'uppercase',
    variants: {
      // Section headers, subsections within pages, large buttons
      large: {
        fontSize: 18,
        lineHeight: 1.5,
      }
    }
  },
  Text: {
    // Default body copy, table copy, general text
    ...common,
    fontSize: 16,
    lineHeight: 1.75,
    fontWeight: 'normal',
    color: colors.neutral8,
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
      }
    }
  }
}
