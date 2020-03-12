/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import Checkbox from './Checkbox'
import ColumnList from './ColumnList'
import Flex from './Flex'
import { Text } from './Typography'

let CheckboxList = ({ options, value, onChange, ...props }) => (
  <ColumnList gap="sm" {...props}>
    {_.map(
      option => (
        <Flex
          as="label"
          key={option.value}
          css={{ cursor: option.disabled ? 'not-allowed' : 'pointer' }}
          gap="sm"
        >
          <Checkbox
            css={{ marginTop: 3 }}
            {...F.domLens.checkboxValues(option.value, [value, onChange])}
            {...option}
          />
          <Text small css={{ flex: 1, opacity: option.disabled && 0.5 }}>
            {option.label}
          </Text>
        </Flex>
      ),
      options
    )}
  </ColumnList>
)

export default observer(CheckboxList)
