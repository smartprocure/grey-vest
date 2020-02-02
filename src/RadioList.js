/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { observer } from 'mobx-react'
import Flex from './Flex'
import SpacedList from './SpacedList'
import { Text } from './Typography'
import theme from './theme'

let RadioButton = ({ native, option, value, onChange, ...props }) => (
  <div css={{ lineHeight: 0 }} {...props}>
    <input
      type="radio"
      css={{
        display: native ? 'inline-block' : 'none',
        width: theme.spaces.md,
        height: theme.spaces.md,
        margin: 0,
      }}
      onChange={() => onChange(option.value)}
      value={option.value}
      checked={value === option.value}
    />
    {!native && (
      <div
        css={[
          {
            width: theme.spaces.md,
            height: theme.spaces.md,
            minWidth: theme.spaces.md,
            minHeight: theme.spaces.md,
            boxSizing: 'border-box',
            background: theme.colors.neutrals[0],
            border: `2px solid ${theme.colors.neutrals[6]}`,
            borderRadius: '50%',
          },
          value === option.value && {
            border: `5px solid ${theme.colors.primaries[0]}`,
          },
          // kludge to fix baseline alignment
          { marginBottom: -3 },
        ]}
      />
    )}
  </div>
)

let RadioList = ({ options, value, onChange, native = false, ...props }) => (
  <SpacedList gap={1} {...props}>
    {_.map(
      option => (
        <Flex
          as="label"
          alignItems="baseline"
          key={option.value}
          css={[
            { cursor: 'pointer' },
            option.disabled && { opacity: 0.5, cursor: 'not-allowed' },
          ]}
          gap="sm"
        >
          <RadioButton
            {...{ native, value, option }}
            onChange={option.disabled ? _.noop : onChange}
          />
          <Text small>{option.label}</Text>
        </Flex>
      ),
      options
    )}
  </SpacedList>
)
export default observer(RadioList)
