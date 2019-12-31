/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import F from 'futil'
import { observer } from 'mobx-react'
import Checkbox from './Checkbox'
import Grid from './Grid'
import Flex from './Flex'
import { Text } from './Typography'
import theme from './theme'

let CheckboxList = ({ options, value, onChange, ...props }) => (
  <Grid gap={1} {...props}>
    {_.map(
      option => (
        <Flex
          as="label"
          alignItems="baseline"
          key={option.value}
        >
          <Checkbox
            {...F.domLens.checkboxValues(option.value, {
              get: () => value,
              set: onChange,
            })}
            css={{ marginRight: theme.spaces.sm }}
          />
          <Text small>{option.label}</Text>
        </Flex>
      ),
      options
    )}
  </Grid>
)

export default observer(CheckboxList)
