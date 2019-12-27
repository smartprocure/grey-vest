/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { findKeys } from './utils'
import theme from './theme'

export let fonts = {
  Title: {
    // Page titles
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes[4],
    lineHeight: theme.lineHeights[1],
    fontWeight: 300,
    color: theme.colors.secondaries[0],
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
        lineHeight: theme.lineHeights[4],
        fontWeight: 'bold',
      },
    },
  },
  Subtitle: {
    // Regular size buttons, main nav section
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights[0],
    fontWeight: 'bold',
    color: theme.colors.secondaries[0],
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
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes[2],
    lineHeight:  theme.lineHeights[4],
    fontWeight: 'normal',
    color: theme.colors.neutrals[8],
    letterSpacing: 'normal',
    variants: {
      // Table header & footer, field labels, dropdown items, compact buttons, pagination, banner copy
      small: {
        fontSize: theme.fontSizes[1],
        lineHeight: theme.lineHeights[3],
      },
      // Tooltips, validation messages
      extraSmall: {
        fontSize: theme.fontSizes[0],
        lineHeight: theme.lineHeights[2],
      },
    },
  },
}

let getVariants = (props, variants) =>
  _.flow(
    _.pick(findKeys(_.stubTrue, props)),
    _.values
  )(variants)

let toComponent = ({ variants, ...styles }) => ({ as: As = 'div', ...props }) => (
  <As css={theme => [styles, ...getVariants(props, variants)]} {...props} />
)

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle, Title } = _.mapValues(toComponent, fonts)
export { Text, Subtitle, Title }
