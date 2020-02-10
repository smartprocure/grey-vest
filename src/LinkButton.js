import styled from '@emotion/styled'
import theme from './theme'

let LinkButton = styled.button({
  color: theme.colors.primary,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
  display: 'inline',
  margin: 0,
  padding: 0,
  outline: 'none',
  '&:hover, &:focus': { textDecoration: 'none' },
})

export default LinkButton
