/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import F from 'futil'
import theme from './theme'

let Flex = (
  {
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
  },
  ref
) => {
  let m = F.alias(gap, theme.spaces)
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
          '> *': { marginTop: m, marginRight: m },
          marginTop: -m,
          marginRight: -m,
        }
      : { '& > * + *': { [`margin${column ? 'Top' : 'Left'}`]: m } },
  ]
  return wrap ? (
    <As css={{ overflow: 'hidden' }} {...props}>
      <div css={flexStyle} ref={ref}>
        {children}
      </div>
    </As>
  ) : (
    <As css={flexStyle} {...props} ref={ref}>
      {children}
    </As>
  )
}

export default forwardRef(Flex)
