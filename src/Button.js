/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import _ from 'lodash/fp'
import styled from '@emotion/styled'
import { Subtitle, Text, Icon, Flex } from './'
import theme from './theme'
let { spaces, colors } = theme

let ButtonText = ({ compact = false, large = false, ...props }) =>
  compact ? (
    <Text extraSmall css={{ fontWeight: 'bold' }} {...props} />
  ) : (
    <Subtitle large={large} {...props} />
  )

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
        padding: large
          ? `${spaces[4]}px ${spaces[5]}px`
          : compact
          ? `${spaces[1]}px ${spaces[2]}px`
          : `${spaces[2]}px ${spaces[4]}px`,
      },
      icon && { paddingRight: 0 },
    ]}
    {...props}
  >
    <Flex alignItems="center">
      <ButtonText {...{ compact, large }}>{children}</ButtonText>
      {icon && (
        <Icon
          icon={icon}
          style={{
            paddingLeft: theme.spaces[1],
            paddingRight: compact ? theme.spaces[1] : theme.spaces[2],
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
      ':hover': { backgroundColor: hoverColor },
      ':active': { backgroundColor: activeColor },
      '& *': { color: textColor },
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
