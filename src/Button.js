/** @jsx jsx */
import { jsx } from '@emotion/core'
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
          }}
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
  ({ baseColor, hoverColor, activeColor, textColor }) =>
    styled(BaseButton)({
      backgroundColor: baseColor,
      color: textColor,
      ':hover': { backgroundColor: hoverColor },
      ':active': { backgroundColor: activeColor },
    }),
  {
    Primary: {
      baseColor: colors.primaries[0],
      hoverColor: colors.primaries[1],
      activeColor: colors.primaries[2],
      textColor: colors.neutrals[0],
    },
    Secondary: {
      baseColor: colors.neutrals[4],
      hoverColor: colors.neutrals[5],
      activeColor: colors.neutrals[6],
      textColor: colors.secondaries[1],
    },
    Tertiary: {
      baseColor: colors.secondaries[1],
      hoverColor: colors.secondaries[0],
      activeColor: colors.secondaries[2],
      textColor: colors.neutrals[0],
    },
    Danger: {
      baseColor: colors.errors[1],
      hoverColor: colors.errors[2],
      activeColor: colors.errors[0],
      textColor: colors.neutrals[0],
    },
    Ghost: {
      baseColor: colors.transparent,
      hoverColor: colors.neutrals[4],
      activeColor: colors.neutrals[5],
      textColor: colors.primaries[0],
    },
  }
)

// default button is a secondary button
let Button = buttonStyles.Secondary
F.extendOn(Button, buttonStyles)

export default Button
