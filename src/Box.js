/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'

let Box = ({ as: As = 'div', variant = 'normal', ...props }) => (
  <As
    css={theme => ({
      borderRadius: theme.spaces.xs,
      backgroundColor: theme.colors.neutrals[0],
      boxShadow: _.get(variant, {
        normal: `0 2px 10px 0 ${theme.colors.neutrals[8]}19`,
        modal: `0 2px 10px 0 ${theme.colors.secondaries[1]}7f`,
        popup: `0 8px 16px -4px ${theme.colors.secondaries[1]}4c,
                0 0 1px 0 ${theme.colors.secondaries[1]}4c`
      }),
      padding: theme.spaces.md,
    })}
    {...props}
  />
)

export default Box
