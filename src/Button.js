/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import { darken, lighten } from 'polished'
import _ from 'lodash/fp'
import { Subtitle, Text } from './Typography'
import GVIcon from './Icon'
import Flex from './Flex'
import theme from './theme'
import { getVariants } from './utils'
let { spaces, space, colors } = theme

let colorVariants = _.mapValues(
  ({ base, hover, active, text }) => ({
    backgroundColor: base,
    color: text || colors.background,
    ':hover': { backgroundColor: hover || darken(0.08, base) },
    ':active': { backgroundColor: active || darken(0.16, base) },
  }),
  {
    regular: {
      base: colors.neutralLight,
      hover: colors.neutral,
      active: colors.neutralDark,
      text: colors.secondary,
    },
    primary: { base: colors.primary },
    secondary: {
      base: colors.secondary,
      hover: darken(0.16, colors.secondary),
      active: lighten(0.08, colors.secondary),
    },
    danger: {
      base: colors.error,
      active: lighten(0.04, colors.error),
    },
    success: { base: colors.success },
    info: {
      base: colors.info,
      active: lighten(0.04, colors.info),
    },
    ghost: {
      base: 'transparent',
      hover: colors.neutralLight,
      active: colors.neutral,
      text: colors.primary,
    },
  }
)

let ButtonText = ({ size, ...x }) => {
  if (size === 'compact')
    return <Text extraSmall css={{ fontWeight: 'bold' }} {...x} />
  if (size === 'large') return <Subtitle large {...x} />
  return <Subtitle {...x} />
}

let getPadding = (size, ratio = 2) =>
  `${space(size)}px ${space(size * ratio)}px`

let Button = (
  {
    as: As = 'button',
    Icon = GVIcon,
    compact,
    large,
    icon,
    disabled,
    children,
    ...props
  },
  ref
) => (
  <As
    css={[
      {
        padding: getPadding(large ? 2 : compact ? 0.5 : 1, large ? 1 : 2),
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: 3,
        transition: 'background-color .2s linear',
        ':active': { transition: 'none' },
      },
      icon && { paddingRight: 0 },
      disabled && { cursor: 'not-allowed', opacity: 0.5 },
      ...getVariants(props, colorVariants, 'regular'),
    ]}
    {...{ ref, ...props }}
  >
    <Flex alignItems="center" justifyContent="center">
      <ButtonText size={(compact && 'compact') || (large && 'large')}>
        {children}
      </ButtonText>
      {icon && (
        <Icon
          icon={icon}
          style={{
            paddingLeft: spaces.xs,
            paddingRight: compact ? spaces.xs : spaces.sm,
            opacity: 0.5,
            lineHeight: 0,
          }}
          size={large ? 4 : compact ? 2 : 3}
        />
      )}
    </Flex>
  </As>
)

export default forwardRef(Button)
