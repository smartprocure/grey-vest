/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import Checkbox from './Checkbox'
import ColumnList from './ColumnList'

let CheckboxList = ({ options, value, onChange, ...props }) => (
  <ColumnList gap="sm" {...props}>
    {_.map(
      option => (
        <Checkbox
          key={option.value}
          {...F.domLens.checkboxValues(option.value, [value, onChange])}
          {...option}
        />
      ),
      options
    )}
  </ColumnList>
)

export default observer(CheckboxList)
