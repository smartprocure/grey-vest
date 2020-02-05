/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import Checkbox from './Checkbox'
import SpacedList from './SpacedList'
import Flex from './Flex'
import { Text } from './Typography'
import theme from './theme'

let CheckboxList = ({ options, value, onChange, ...props }) => (
  <SpacedList gap={1} {...props}>
    {_.map(
      option => (
        <Flex
          as="label"
          alignItems="baseline"
          key={option.value}
          css={{ cursor: option.disabled ? 'not-allowed' : 'pointer' }}
        >
          <Checkbox
            {...F.domLens.checkboxValues(option.value, [value, onChange])}
            css={{ marginRight: theme.spaces.sm }}
            {...option}
          />
          <Text small css={{ flex: 1, opacity: option.disabled && 0.5 }}>
            {option.label}
          </Text>
        </Flex>
      ),
      options
    )}
  </SpacedList>
)

export default observer(CheckboxList)
