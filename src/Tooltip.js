/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactTooltip from 'react-tooltip'
import { Text } from './Typography'
import theme from './theme'

let Tooltip = props => (
  <ReactTooltip
    css={{
      backgroundColor: `${theme.colors.secondaries[1]} !important`,
      color: `${theme.colors.neutrals[0]} !important`,
      padding: `0 ${theme.spaces.sm}px 2px !important`,
      maxWidth: theme.breakpoints.popupMax,
      // '&:after': { display: 'none' }, // <-- hide the arrow
    }}
    {...props}
    getContent={data => <Text extraSmall>{data}</Text>}
  />
)

export default Tooltip
