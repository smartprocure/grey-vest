/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import _ from 'lodash/fp'
import { findKeys } from './utils'
import { variant, typography } from 'styled-system'

export let fonts = {
  Title: {
    // Page titles
    variants: {
      // Extra large numerical callouts
      large: {
        fontSize: 5,
        lineHeight: 0,
        letterSpacing: -0.05,
      },
      // Modal & tab titles
      small: {
        fontSize: 3,
        lineHeight: 4,
        fontWeight: 'bold',
      },
    },
  },
  Subtitle: {
    // Regular size buttons, main nav section
    fontSize: 1,
    lineHeight: 0,
    fontWeight: 'bold',
    color: 'secondaries.0',
    letterSpacing: 2,
    textTransform: 'uppercase',
    variants: {
      // Section headers, subsections within pages, large buttons
      large: {
        fontSize: 3,
        lineHeight: 2,
      },
    },
  },
  Text: {
    // Default body copy, table copy, general text
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 'normal',
    color: 'neutrals.8',
    letterSpacing: 'normal',
    variants: {
      // Table header & footer, field labels, dropdown items, compact buttons, pagination, banner copy
      small: {
        fontSize: 1,
        lineHeight: 3,
      },
      // Tooltips, validation messages
      extraSmall: {
        fontSize: 0,
        lineHeight: 2,
      },
    },
  },
}

let getVariants = (props, variants) =>
  _.flow(
    _.pick(findKeys(_.stubTrue, props)),
    _.values
  )(variants)

let toComponent = ({ as: As = 'div', variants, ...styles }) => props => (
  <As css={[styles, ...getVariants(props, variants)]} {...props} />
)

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle } = _.mapValues(toComponent, fonts)
export { Text, Subtitle }

export let Title = styled('div')(
  typography,
  {
    fontWeight: 300,
    color: 'secondaries.0',
    letterSpacing: 'normal',
  },
  variant({
    prop: 'size',
    variants: {
      // Extra large numerical callouts
      large: {
        fontSize: 5,
        lineHeight: 0,
        letterSpacing: -0.05,
      },
      // Modal & tab titles
      small: {
        fontSize: 3,
        lineHeight: 4,
        fontWeight: 'bold',
      },
    },
  })
)
Title.defaultProps = {
  fontSize: 4,
  lineHeight: 1,
}
