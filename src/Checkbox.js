/** @jsx jsx */
import { jsx } from '@emotion/core'
import Icon from './Icon'
import Flex from './Flex'
import theme from './theme'

// Low effort custom checkbox
let Checkbox = ({ checked = false, disabled, onChange = () => {} }) => (
    <Flex
    as="label"
      css={[
        {
          boxSizing: 'border-box',
          cursor: 'pointer',
          height: theme.spaces[4],
          width: theme.spaces[4],
          borderRadius: 3,
          backgroundColor: theme.colors.neutrals[0],
          border: `2px solid ${theme.colors.neutrals[6]}`,
          '& *': { color: theme.colors.primaries[0] },
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
    >
      <input
        type="checkbox"
        style={{
          border: 0,
          clip: 'rect(0 0 0 0)',
          clippath: 'inset(50%)',
          height: 1,
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: 1,
        }}
        {...{ checked, onChange }}
      />
      {checked ? (
        <Icon icon="check" size={0} style={{ fontWeight: 900 }} />
      ) : (
        String.fromCharCode(160) // non-breaking space
      )}
    </Flex>
)
export default Checkbox
