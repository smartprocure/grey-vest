import styled from '@emotion/styled'
import theme from './theme'

let Flex = styled.div(
  ({
    gap = 0,
    alignItems,
    alignContent,
    justifyContent,
    wrap = false,
    column = false,
    inline = false,
  }) => [
    {
      display: `${inline ? 'inline-' : ''}flex`,
      flexWrap: wrap && 'wrap',
      flexDirection: column && 'column',
      alignItems,
      justifyContent,
      alignContent,
    },
    wrap
      ? {
          '> *': {
            marginBottom: theme.space(gap),
            marginRight: theme.space(gap),
          },
          marginBottom: -theme.space(gap),
          marginRight: -theme.space(gap),
          overflow: 'hidden',
        }
      : {
          '& > * + *': {
            [`margin${column ? 'Top' : 'Left'}`]: theme.space(gap),
          },
        },
  ]
)

export default Flex
