/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useContext } from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import { Text } from './Typography'
import Icon from './Icon'
import Tooltip from './Tooltip'
import { PopoverContext } from './Popover'
import theme from './theme'

let DropdownItem = ({
  icon,
  disabled,
  truncate,
  closePopup,
  onClick,
  children,
  ...props
}) => {
  let ctx = useContext(PopoverContext)
  return (
    <div
      css={[
        {
          color: theme.colors.text,
          cursor: 'pointer',
          marginTop: theme.spaces.xs,
          marginBottom: theme.spaces.xs,
          marginLeft: icon ? theme.spaces.sm : theme.spaces.md,
          marginRight: theme.spaces.md,
          display: 'grid',
          gridGap: theme.spaces.sm,
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
        },
        disabled
          ? { opacity: '50%', cursor: 'not-allowed' }
          : { '&:hover > *': { color: theme.colors.primary } },
      ]}
      onClick={_.over([onClick, closePopup && F.off(ctx)])}
      {...props}
    >
      {icon && <Icon icon={icon} style={{ color: theme.colors.primary }} />}
      <Text
        small
        css={
          truncate && {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }
        }
        data-tip={truncate ? children : null}
      >
        {children}
      </Text>
      {truncate && <Tooltip />}
    </div>
  )
}

export default DropdownItem
