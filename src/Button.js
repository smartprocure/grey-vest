/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import { darken, lighten, padding } from 'polished'
import _ from 'lodash/fp'
import { Subtitle, Text } from './Typography'
import GVIcon from './Icon'
import Flex from './Flex'
import theme from './theme'
import { getVariants, getVariant } from './utils'
let { spaces, space, colors } = theme

let colorVariants = _.mapValues(
  ({ base, hover, active, text }) => ({
    backgroundColor: base,
    color: text || colors.background,
    ':hover': { backgroundColor: hover || darken(0.08, base) },
    ':active': { backgroundColor: active || darken(0.16, base) },
  }),
  {
    default: {
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

let textVariants = {
  small: x => <Text extraSmall bold {...x} />,
  large: x => <Subtitle large {...x} />,
  default: x => <Subtitle {...x} />,
}

let variantKeys = [..._.keys(colorVariants), ..._.keys(textVariants)]

let paddings = { small: [0.5, 1], large: [2, 2], default: [1, 2] }
let paddingVariants = _.mapValues(_.map(space), paddings)

let Button = (
  { as: As = 'button', Icon = GVIcon, icon, disabled, children, ...props },
  ref
) => (
  <As
    css={[
      {
        ...padding(...getVariant(props, paddingVariants)),
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: 3,
        transition: 'background-color .2s linear',
        ':active': { transition: 'none' },
      },
      icon && { paddingRight: 0 },
      disabled && { cursor: 'not-allowed', opacity: 0.5 },
      ...getVariants(props, colorVariants),
    ]}
    {...{ ref, ..._.omit(variantKeys, props) }}
  >
    <Flex alignItems="center" justifyContent="center">
      {getVariant(props, textVariants)({ children })}
      {icon && (
        <Icon
          {...{ icon, ..._.pick(['large', 'small'], props) }}
          style={{
            paddingLeft: spaces.xs,
            paddingRight: props.small ? spaces.xs : spaces.sm,
            opacity: 0.5,
            lineHeight: 0,
          }}
        />
      )}
    </Flex>
  </As>
)

export default forwardRef(Button)
