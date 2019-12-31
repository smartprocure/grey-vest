/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import _ from 'lodash/fp'
import { observer } from 'mobx-react'
import Flex from './Flex'
import Grid from './Grid'
import { Text } from './Typography'
import theme from './theme'

let RadioButton = ({ native, option, value, onChange, ...props }) => (
  <div {...props}>
    <input
      type="radio"
      css={{
        display: native ? 'inline-block' : 'none',
        width: 'auto',
        height: 'auto',
      }}
      onChange={() => onChange(option.value)}
      value={option.value}
      checked={value === option.value}
    />
    {!native && (
      <div
        css={[
          {
            width: theme.spaces[4],
            height: theme.spaces[4],
            minWidth: theme.spaces[4],
            minHeight: theme.spaces[4],
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
  <Grid gap={1} {...props}>
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
        >
          <RadioButton
            {...{ native, value, option }}
            onChange={option.disabled ? _.noop : onChange}
            css={{ marginRight: theme.spaces[2] }}
          />
          <Text small>{option.label}</Text>
        </Flex>
      ),
      options
    )}
  </Grid>
)
export default observer(RadioList)
