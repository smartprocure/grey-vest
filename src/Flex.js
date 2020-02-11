/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
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
}, ref) => {
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
      <div css={flexStyle} ref={ref}>{children}</div>
    </As>
  ) : (
    <As css={flexStyle} {...props} ref={ref}>
      {children}
    </As>
  )
}

export default forwardRef(Flex)
