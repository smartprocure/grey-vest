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

let BaseButton = ({
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
          ? `${theme.spaces[4]}px ${theme.spaces[4]}px`
          : compact
          ? `${theme.spaces[1]}px ${theme.spaces[2]}px`
          : `${theme.spaces[2]}px ${theme.spaces[4]}px`,
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

let Button = styled(BaseButton)(
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
Button.Secondary = Button

let buttonStyles = _.mapValues(
  ({ baseColor, hoverColor, activeColor, textColor }) =>
    styled(Button)({
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

console.log({ buttonStyles })

F.extendOn(Button, buttonStyles)

export default Button
