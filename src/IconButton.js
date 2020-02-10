/** @jsx jsx */
import { jsx } from '@emotion/core'
import Icon from './Icon'
import theme from './theme'

let IconButton = ({ icon, ...props }) => (
  <div
    css={{
      width: theme.spaces.lg,
      height: theme.spaces.lg,
      borderRadius: 100,
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all .1s linear',
      color: theme.colors.secondary,
      backgroundColor: 'transparent',
      opacity: 0.5,
      ':hover': {
        backgroundColor: theme.colors.neutrals[0],
        opacity: 1,
      },
      '&:active, &.primary': {
        backgroundColor: theme.colors.neutrals[1],
      },
    }}
    {...props}
  >
    <Icon icon={icon} />
  </div>
)

export default IconButton
