/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { margin } from 'polished'
import GVPagerItem from './PagerItem'
import { Text } from './Typography'
import Flex from './Flex'
import theme from './theme'

let PageSize = ({
  value,
  onChange = () => {},
  sizeOptions = [10, 20, 50, 100, 250],
  PagerItem = GVPagerItem,
  ...props
}) => {
  value = _.toInteger(value) || 10
  return (
    <Flex alignItems="baseline" {...props}>
      <Text small bold css={{ marginRight: theme.spaces.xs }}>
        View
      </Text>
      {_.map(
        size => {
          let active = size === value
          return (
            <PagerItem
              key={size}
              active={active}
              onClick={() => onChange(size)}
              css={active && margin(0, theme.spaces.xs)}
            >
              {size}
            </PagerItem>
          )
        },
        _.flow(
          _.concat(value),
          _.sortBy(_.identity),
          _.sortedUniq
        )(sizeOptions)
      )}
    </Flex>
  )
}

export default PageSize
