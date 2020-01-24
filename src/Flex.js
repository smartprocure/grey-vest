/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'

let Flex = ({
  as: As = 'div',
  alignItems,
  alignContent,
  justifyContent,
  wrap = false,
  column = false,
  inline = false,
  children,
  gap = 0,
  ...props
}) => {
  let m = theme.space(gap)
  let flexStyle = [
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
          '> *': { marginBottom: m, marginRight: m },
          marginBottom: -m,
          marginRight: -m,
        }
      : { '& > * + *': { [`margin${column ? 'Top' : 'Left'}`]: m } },
  ]
  return wrap ? (
    <As css={{ overflow: 'hidden' }} {...props}>
      <div css={flexStyle}>{children}</div>
    </As>
  ) : (
    <As css={flexStyle} {...props}>
      {children}
    </As>
  )
}

export default Flex
