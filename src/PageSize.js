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
  sizeOptions = [10, 20, 50, 100, 250],
  PagerItem = GVPagerItem,
  ...props
}) => (
  <Flex alignItems="baseline" {...props}>
    <Text small bold css={{ marginRight: theme.spaces.xs }}>View</Text>
    {_.map(
      size => (
        <PagerItem
          key={size}
          active={size === value}
          onClick={() => onChange(size)}
          css={{ margin: 2 }}
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
