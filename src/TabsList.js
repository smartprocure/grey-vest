/** @jsx jsx */
import { jsx } from '@emotion/core'
import { transparentize, padding } from 'polished'
import { Text } from './Typography'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import theme from './theme'
import { getVariant } from './utils'
let { colors } = theme

let themePadding = F.mapArgs(theme.space, padding)

let classic = {
  ...themePadding(1.5, 2.5),
  backgroundColor: colors.neutrals[0],
  color: colors.text,
  borderLeft: `solid 1px ${colors.neutrals[1]}`,
  transition: 'background-color 0.1s linear',
  '& > div': { fontWeight: 'bold', fontSize: theme.fontSizes[1] },
  '&.active + &': { borderLeft: 'none' },
  '&.active, &:last-child': { borderTopRightRadius: theme.borderRadius },
  '&.active, &:first-child': {
    borderTopLeftRadius: theme.borderRadius,
    borderLeft: 'none',
  },
  '&.active, &.active:hover': {
    ...themePadding(1.5, 4),
    backgroundColor: colors.backgrounds[0],
    // white box shadow trick from http://dev.housetrip.com/2012/06/15/good-looking-css-tabs/
    boxShadow: `0 10px 0 0 ${colors.backgrounds[0]}, ${
      theme.boxShadows.normal
    }`,
    '& > div': { fontSize: theme.fontSizes[2] },
    borderLeft: 'none',
  },
  '&:hover': {
    backgroundColor: colors.neutrals[1],
  },
}
let transparent = {
  ...themePadding(0.25, 2),
  borderBottom: `2px solid ${colors.neutrals[1]}`,
  color: transparentize(0.5, colors.text),
  borderTopLeftRadius: theme.borderRadius,
  borderTopRightRadius: theme.borderRadius,
  transition: 'all 0.1s linear',
  '& > div': { fontWeight: 600 },
  '&.active, &.active:hover': {
    color: colors.primary,
    borderColor: colors.primary,
  },
  '&:hover': { color: colors.secondary },
  '&:active': { backgroundColor: colors.neutrals[0] },
}
let regular = {
  ...transparent,
  backgroundColor: colors.neutrals[0],
  '&.active': {
    backgroundColor: colors.backgrounds[0],
    boxShadow: theme.boxShadows.normal,
  },
  '&:active': {
    backgroundColor: colors.neutrals[1],
  },
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  '&:first-child': { borderTopLeftRadius: theme.borderRadius },
  '&:last-child': { borderTopRightRadius: theme.borderRadius },
}
let variants = { classic, transparent, default: regular }

let TabsList = ({ value, onChange = () => {}, options, ...props }) => (
  <div>
    {_.map(
      x => (
        <div
          key={x.value}
          className={x.value === value && 'active'}
          css={[
            {
              display: 'inline-block',
              cursor: 'pointer',
              verticalAlign: 'bottom',
              textAlign: 'center',
            },
            getVariant(props, variants),
          ]}
          onClick={() => onChange(x.value, value)}
        >
          <Text>{x.label}</Text>
        </div>
      ),
      options
    )}
  </div>
)

export default observer(TabsList)
