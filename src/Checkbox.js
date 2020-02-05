/** @jsx jsx */
import { jsx } from '@emotion/core'
import Icon from './Icon'
import Flex from './Flex'
import theme from './theme'

// Low effort custom checkbox
let Checkbox = ({
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
        backgroundColor: theme.colors.neutrals[0],
        border: `2px solid ${theme.colors.neutrals[6]}`,
        transition: 'all 0.5s ease',
        '& i': { 
          color: checked ? theme.colors.primaries[0] : 'transparent',
        },
      },
      disabled && {
        borderColor: theme.colors.neutrals[5],
        backgroundColor: theme.colors.neutrals[5],
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
      {...{ checked, onChange: disabled ? () => {} : onChange }}
    />
    <Icon
      icon="check"
      size={0}
      style={{ fontWeight: 'bold' }}
    />
  </Flex>
)
export default Checkbox
