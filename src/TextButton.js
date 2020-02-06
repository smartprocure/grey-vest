import styled from '@emotion/styled'
import theme from './theme'

let TextButton = styled.div({
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
})

export default TextButton
