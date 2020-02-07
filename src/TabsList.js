/** @jsx jsx */
import { jsx } from '@emotion/core'
import { transparentize } from 'polished'
import { Text } from './Typography'
import _ from 'lodash/fp'
import { observer } from 'mobx-react'
import theme from './theme'
import { getVariant } from './utils'
let { colors } = theme

let classic = {
  padding: `${theme.space(1.5)}px ${theme.space(2.5)}px`,
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
    padding: `${theme.space(1.5)}px ${theme.space(4)}px`,
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
  padding: `${theme.space(0.25)}px ${theme.spaces.md}px`,
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
    boxShadow: `0 10px 0 0 ${colors.backgrounds[0]}, ${
      theme.boxShadows.normal
    }`,
  },
  '&:active': {
    backgroundColor: colors.neutrals[1],
  },
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  '&:first-child': { borderTopLeftRadius: theme.borderRadius },
  '&:last-child': { borderTopRightRadius: theme.borderRadius },
}
let variants = { classic, transparent, regular }

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
            getVariant(props, variants, 'regular'),
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
