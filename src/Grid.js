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

let getSpace = (gap, override) => F.alias(F.when(_.isNil, override, gap), theme.spacings)

let Grid = ({
  as: As = 'div',
  columns,
  rows,
  areas,
  gap,
  xGap,
  yGap,
  placeContent,
  placeItems,
  inline = false,
  style,
  ...props
}) => (
  <As
    css={theme => ({
      display: `${inline ? 'inline-' : ''}grid`,
      gridTemplateColumns: repeatNumber(columns),
      gridTemplateRows: repeatNumber(rows),
      gridTemplateAreas: formatAreas(areas),
      gridGap: `${getSpace(xGap, gap)} ${getSpace(yGap, gap)}`,
      placeContent,
      placeItems,
    })}
    {...props}
  />
)

export default Grid
