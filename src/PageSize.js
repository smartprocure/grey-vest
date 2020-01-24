/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import GVPagerItem from './PagerItem'
import { Text } from './Typography'
import Flex from './Flex'
import theme from './theme'

let PageSize = ({
  value,
  onChange = () => {},
  sizeOptions = [20, 50, 100, 250],
  PagerItem = GVPagerItem
}) => (
  <Flex alignItems="baseline">
    <Text small css={{ marginRight: theme.spaces.xs }}>View</Text>
    {_.map(
      size => (
        <PagerItem
          key={size}
          active={size === value}
          onClick={() => onChange(size)}
        >
          {size}
        </PagerItem>
      ),
      _.flow(
        _.concat(value),
        _.sortBy(_.identity),
        _.sortedUniq
      )(sizeOptions)
    )}
  </Flex>
)

export default PageSize
