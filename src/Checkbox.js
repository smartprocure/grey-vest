/** @jsx jsx */
import { jsx } from '@emotion/core'
import Icon from './Icon'
import Flex from './Flex'
import { Text } from './Typography'
import theme from './theme'

let BaseCheckbox = ({
  checked = false,
  disabled,
  onChange = () => {},
  ...props
}) => (
  <Flex
    as="label"
    css={[
      {
        userSelect: 'none',
        boxSizing: 'border-box',
        cursor: 'pointer',
        height: theme.spaces.md,
        width: theme.spaces.md,
        minWidth: theme.spaces.md,
        minHeight: theme.spaces.md,
        borderRadius: 3,
        backgroundColor: theme.colors.backgrounds[0],
        border: `2px solid ${theme.colors.neutrals[2]}`,
        transition: 'all 0.5s ease',
        '& > i': {
          color: checked ? theme.colors.primary : 'transparent',
          transition: 'color 0.1s linear',
        },
      },
      disabled && {
        borderColor: theme.colors.neutrals[1],
        backgroundColor: theme.colors.neutrals[1],
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    ]}
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <input
      type="checkbox"
      style={{ display: 'none' }}
      {...{ disabled, checked }}
      onChange={() => !disabled && onChange(!checked)}
    />
    <Icon icon="check" small style={{ fontWeight: 800 }} />
  </Flex>
)

let LabeledCheckbox = ({ disabled, label, ...props }) => (
  <Flex
    as="label"
    css={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    gap="sm"
  >
    <Checkbox css={{ marginTop: 3 }} {...{ disabled, ...props }} />
    <Text small css={{ flex: 1, opacity: disabled && 0.5 }}>
      {label}
    </Text>
  </Flex>
)

let Checkbox = ({ label, ...props }) =>
  label ? (
    <LabeledCheckbox {...{ label, ...props }} />
  ) : (
    <BaseCheckbox {...props} />
  )

export default Checkbox
