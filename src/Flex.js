import styled from '@emotion/styled'

let Flex = styled.div(
  ({
    style,
    alignItems,
    alignContent,
    justifyContent,
    wrap = false,
    column = false,
    inline = false,
  }) => ({
    display: `${inline ? 'inline-' : ''}flex`,
    flexWrap: wrap && 'wrap',
    flexDirection: column && 'column',
    alignItems,
    justifyContent,
    alignContent,
    ...style,
  })
)

export default Flex
