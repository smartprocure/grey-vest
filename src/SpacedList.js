/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'

let SpacedList = ({
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
      columnGap: theme.space(columnGap),
      '& > *': { breakInside: 'avoid-column' },
      // Targets every direct child with another direct child before it
      '& > * + *': { marginTop: theme.space(gap) },
    }}
    {...props}
  >
    {children}
  </div>
)

export default SpacedList
