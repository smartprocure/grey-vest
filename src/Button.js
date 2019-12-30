/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import styled from '@emotion/styled'
import { Subtitle, Text, Icon, Flex } from './'
import theme from './theme'

let getColor = F.aliasIn(theme.colors)

let buttonStyle = (baseColor, hoverColor, activeColor, textColor) => ({
  backgroundColor: getColor(baseColor),
  ':hover': { backgroundColor: getColor(hoverColor) },
  ':active': { backgroundColor: getColor(activeColor) },
  '& *': { color: getColor(textColor) },
})

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
          ? theme.spaces[4]
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
            opacity: 0.5
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
  buttonStyle('neutrals.4', 'neutrals.5', 'neutrals.6', 'secondaries.1'),
  ({ disabled }) =>
    disabled && {
      cursor: 'not-allowed',
      opacity: 0.5,
    }
)
Button.Secondary = Button

Button.Primary = styled(Button)(
  buttonStyle('primaries.0', 'primaries.1', 'primaries.2', 'neutrals.0')
)
Button.Tertiary = styled(Button)(
  buttonStyle('secondaries.1', 'secondaries.0', 'secondaries.2', 'neutrals.0')
)
Button.Danger = styled(Button)(
  buttonStyle('errors.1', 'errors.2', 'errors.0', 'neutrals.0')
)
Button.Ghost = styled(Button)(
  buttonStyle('transparent', 'neutrals.4', 'neutrals.5', 'primaries.0')
)

export default Button
