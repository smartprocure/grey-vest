/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import GVPagerItem from './PagerItem'
import GVIcon from './Icon'
import Flex from './Flex'

let Pager = ({
  page,
  onChange = () => {},
  pages,
  PagerItem = GVPagerItem,
  Icon = GVIcon,
}) =>
  pages > 1 && (
    <Flex justifyContent="center" alignItems="center">
      <PagerItem disabled={!(page > 1)} onClick={() => onChange(page - 1)}>
        <Icon icon="PreviousPage" />
      </PagerItem>
      {page > 3 && (
        <PagerItem onClick={() => onChange(_.max([0, page - 5]))}>
          <Icon icon="Previous5Pages" />
        </PagerItem>
      )}
      {_.reverse(
        _.times(
          n =>
            page > n + 1 && (
              <PagerItem
                key={`prev${n}`}
                onClick={() => onChange(page - (n + 1))}
              >
                {page - (n + 1)}
              </PagerItem>
            ),
          2
        )
      )}
      <PagerItem active>{page}</PagerItem>
      {_.times(
        n =>
          page + (n + 1) <= pages && (
            <PagerItem
              key={`next${n}`}
              onClick={() => onChange(page + (n + 1))}
            >
              {page + (n + 1)}
            </PagerItem>
          ),
        2
      )}
      {page + 2 < pages && (
        <PagerItem onClick={() => onChange(_.min([pages, page + 5]))}>
          <Icon icon="Next5Pages" />
        </PagerItem>
      )}
      <PagerItem disabled={!(page < pages)} onClick={() => onChange(page + 1)}>
        <Icon icon="NextPage" />
      </PagerItem>
    </Flex>
  )

export default Pager
