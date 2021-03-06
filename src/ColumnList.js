/** @jsx jsx */
import { jsx } from '@emotion/core'
import F from 'futil'
import theme from './theme'

let ColumnList = ({
  children,
  gap,
  columnWidth = theme.widths.xs,
  columnCount = 1,
  columnGap = 0,
  ...props
}) => (
  <div
    css={{
      columnWidth,
      columnCount,
      columnGap: F.alias(columnGap, theme.spaces),
      '& > *': { breakInside: 'avoid-column' },
      // Targets every direct child with another direct child before it
      '& > * + *': { marginTop: F.alias(gap, theme.spaces) },
    }}
    {...props}
  >
    {children}
  </div>
)

export default ColumnList
