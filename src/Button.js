/** @jsx jsx */
import { jsx } from '@emotion/core'
import { darken, lighten, readableColor } from 'polished'
import F from 'futil'
import _ from 'lodash/fp'
import styled from '@emotion/styled'
import { Subtitle, Text, Icon, Flex } from './'
import theme from './theme'
let { spaces, space, colors } = theme

let ButtonText = ({ size, ...x }) => {
  if (size === 'compact')
    return <Text extraSmall css={{ fontWeight: 'bold' }} {...x} />
  if (size === 'large') return <Subtitle large {...x} />
  return <Subtitle {...x} />
}

let getPadding = (size, ratio = 2) =>
  `${space(size)}px ${space(size * ratio)}px`

let ButtonComponent = ({
  as: As = 'button',
  compact = false,
  large = false,
  icon,
  children,
  ...props
}) => (
  <As
    css={[
      {
        padding: getPadding(large ? 2 : compact ? 0.5 : 1, large ? 1 : 2),
      },
      icon && { paddingRight: 0 },
    ]}
    {...props}
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

let BaseButton = styled(ButtonComponent)(
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 3,
    transition: 'background-color .2s linear',
    ':active': { transition: 'none' },
  },
  ({ disabled }) =>
    disabled && {
      cursor: 'not-allowed',
      opacity: 0.5,
    }
)

let buttonStyles = _.mapValues(
  ({ base, hover, active, text }) =>
    styled(BaseButton)({
      backgroundColor: base,
      color:
        text ||
        readableColor(darken(0.16, base), colors.secondary, colors.background),
      ':hover': { backgroundColor: hover || darken(0.08, base) },
      ':active': { backgroundColor: active || darken(0.16, base) },
    }),
  {
    Primary: { base: colors.primary },
    Secondary: {
      base: colors.neutralLight,
      hover: colors.neutral,
      active: colors.neutralDark,
    },
    Tertiary: {
      base: colors.secondary,
      hover: darken(0.16, colors.secondary),
      active: lighten(0.08, colors.secondary),
    },
    Danger: { base: colors.error, active: lighten(0.04, colors.error) },
    Ghost: {
      base: 'transparent',
      hover: colors.neutralLight,
      active: colors.neutral,
      text: colors.primary,
    },
  }
)

// default button is a secondary button
let Button = buttonStyles.Secondary
F.extendOn(Button, buttonStyles)

export default Button
