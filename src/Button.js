/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Subtitle, Text } from './'
import theme from './theme'
import { defaultProps } from 'recompose'

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
  children,
  ...props
}) => (
  <As
    css={{
      padding: large
        ? theme.spaces[4]
        : compact
        ? `${theme.spaces[1]}px ${theme.spaces[2]}px`
        : `${theme.spaces[2]}px ${theme.spaces[4]}px`,
    }}
    {...props}
  >
    <ButtonText {...{ compact, large }}>{children}</ButtonText>
  </As>
)

let Button = styled(BaseButton)(
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 3,
    transition: 'background-color .2s linear',
    backgroundColor: theme.colors.neutrals[4],
    ':hover': { backgroundColor: theme.colors.neutrals[5] },
    ':active': {
      backgroundColor: theme.colors.neutrals[6],
      transition: 'none',
    },
    '& > *': { color: theme.colors.secondaries[1] },
  },
  ({ disabled }) =>
    disabled && {
      cursor: 'not-allowed',
      opacity: 0.5,
    }
)
Button.Secondary = Button

Button.Primary = styled(Button)({
  backgroundColor: theme.colors.primaries[0],
  ':hover': { backgroundColor: theme.colors.primaries[1] },
  ':active': { backgroundColor: theme.colors.primaries[2] },
  '& > *': { color: theme.colors.neutrals[0] },
})

Button.Tertiary = styled(Button)({
  backgroundColor: theme.colors.secondaries[1],
  ':hover': { backgroundColor: theme.colors.secondaries[0] },
  ':active': { backgroundColor: theme.colors.secondaries[2] },
  '& > *': { color: theme.colors.neutrals[0] },
})

Button.Danger = styled(Button)({
  backgroundColor: theme.colors.errors[1],
  ':hover': { backgroundColor: theme.colors.errors[2] },
  ':active': { backgroundColor: theme.colors.errors[0] },
  '& > *': { color: theme.colors.neutrals[0] },
})

Button.Ghost = styled(Button)({
  backgroundColor: 'transparent',
  ':hover': { backgroundColor: theme.colors.neutrals[4] },
  ':active': { backgroundColor: theme.colors.neutrals[5] },
  '& > *': { color: theme.colors.primaries[0] },
})

export default Button
