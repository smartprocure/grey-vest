import styled from '@emotion/styled'

let TextButton = styled.div({
  borderRadius: 100,
  padding: 5,
  cursor: 'pointer',
  color: '#9b9b9b',
  display: 'inline-block',
  transition: 'background-color .1s linear, color .1s linear',
  '> *': {
    verticalAlign: 'middle',
  },
  i: {
    width: 20,
    height: 20,
    fontSize: 20,
  },
  ':hover': {
    backgroundColor: 'rgba(216, 216, 216, 0.4)',
    color: '#000',
  },
  '&:active, &.primary': {
    backgroundColor: '#0076de',
    color: '#fff',
  },
})

export default TextButton
