/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import GVPagerItem from './PagerItem'
import Flex from './Flex'

let PageSize = ({
  value,
  onChange = () => {},
  sizeOptions = [20, 50, 100],
  PagerItem = GVPagerItem
}) => {
  let allSizeOptions = _.union([value], sizeOptions)
  return (
    <div>
      View
      {_.map(
        size => (
          <PagerItem
            key={size}
            active={size === value}
            onClick={() => onChange(size)}
          >
            {value}
          </PagerItem>
        ),
        allSizeOptions
      )}
    </div>
  )
}

export default PageSize
