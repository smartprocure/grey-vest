/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text } from './Typography'
import _ from 'lodash/fp'
import { observer } from 'mobx-react'
import theme from './theme'
let { colors } = theme

let classic = {
  padding: `${theme.space(1.5)}px ${theme.space(2.5)}px`,
  backgroundColor: colors.neutrals[4],
  color: colors.neutrals[8],
  borderLeft: `solid 1px ${colors.neutrals[5]}`,
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
    backgroundColor: colors.neutrals[0],
    // white box shadow trick from http://dev.housetrip.com/2012/06/15/good-looking-css-tabs/
    boxShadow: `0 10px 0 0 ${colors.neutrals[0]}, ${theme.boxShadows.normal}`,
    '& > div': { fontSize: theme.fontSizes[2] },
    borderLeft: 'none',
  },
  '&:hover': {
    backgroundColor: colors.neutrals[5],
  },
}

let floating = {
  padding: `${theme.space(0.25)}px ${theme.spaces.md}px`,
  borderBottom: `2px solid ${colors.neutrals[5]}`,
  color: `${colors.neutrals[8]}7F`,
  borderTopLeftRadius: theme.borderRadius,
  borderTopRightRadius: theme.borderRadius,
  transition: 'all 0.1s linear',
  '& > div': { fontWeight: 600 },
  '&.active, &.active:hover': {
    color: colors.primaries[0],
    borderColor: colors.primaries[0],
  },
  '&:hover': { color: colors.secondaries[1] },
  '&:active': { backgroundColor: colors.neutrals[4] },
}

let regular = {
  ...floating,
  backgroundColor: colors.neutrals[4],
  '&.active': {
    backgroundColor: colors.neutrals[0],
    boxShadow: `0 10px 0 0 ${colors.neutrals[0]}, ${theme.boxShadows.normal}`,
  },
  '&:active': {
    backgroundColor: colors.neutrals[5],
  },
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  '&:first-child': { borderTopLeftRadius: theme.borderRadius },
  '&:last-child': { borderTopRightRadius: theme.borderRadius },
}

let BaseTabsList = ({ value, onChange = () => {}, tabStyle, options }) => (
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
            tabStyle,
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

let TabsList = props => <BaseTabsList tabStyle={regular} {...props} />
TabsList.Transparent = props => <BaseTabsList tabStyle={floating} {...props} />
TabsList.Classic = props => <BaseTabsList tabStyle={classic} {...props} />

export default observer(TabsList)
