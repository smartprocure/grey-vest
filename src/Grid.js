/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'
import _ from 'lodash/fp'
import F from 'futil'

let formatAreas = _.flow(
  _.map(F.quote),
  _.join(' ')
)

let repeatNumber = F.when(_.isNumber, x => `repeat(${x}, 1fr)`)

let Grid = ({
  as: As = 'div',
  columns,
  rows,
  areas,
  gap,
  placeContent,
  placeItems,
  inline = false,
  ...props
}) => (
  <As
    css={{
      display: `${inline ? 'inline-' : ''}grid`,
      gridTemplateColumns: repeatNumber(columns),
      gridTemplateRows: repeatNumber(rows),
      gridTemplateAreas: formatAreas(areas),
      gridGap: theme.space(gap),
      placeContent,
      placeItems,
    }}
    {...props}
  />
)

export default Grid
