/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import BaseReactSelect from 'react-select'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme from './theme'
import Icon from './Icon'
let { spaces, fonts, colors } = theme

let NativeSelect = ({ placeholder, options, ...props }) => (
  <select {...props} css={theme.inputStyle}>
    {placeholder && <option value="">{placeholder}</option>}
    {_.map(
      x => (
        <option key={x.value} value={x.value}>
          {x.label}
        </option>
      ),
      options
    )}
  </select>
)

let ReactSelect = ({ value, options, ...props }) => (
  <BaseReactSelect
    styles={{
      container: provided => ({
        ...provided,
        position: 'relative',
        ..._.pick(['minWidth', 'maxWidth'], theme.inputStyle),
      }),
      control: (provided, state) => ({
        display: 'flex',
        outline: 'none',
        ..._.omit(['padding', 'minWidth', 'maxWidth'], theme.inputStyle),
        ...(state.isFocused && theme.inputStyle['&:focus']),
        ...(props.error && { borderColor: theme.colors.errors[1] }),
      }),
      input: provided => ({ ...provided, margin: 0 }),
      menu: () => ({
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99999,
        backgroundColor: colors.neutrals[0],
        marginTop: spaces.xs,
        boxShadow: theme.boxShadows.popup,
        borderRadius: theme.borderRadius,
      }),
      option: () => ({
        ...fonts.Text,
        ...fonts.Text.variants.small,
        color: colors.text,
        cursor: 'pointer',
        padding: `${spaces.xs}px ${spaces.md}px`,
        '&:hover': {
          backgroundColor: `${colors.neutrals[1]}`,
          color: colors.primary,
        },
      }),
      indicatorSeparator: () => ({}),
      indicatorContainer: () => ({}),
      dropdownIndicator: () => ({ padding: 8 }),
      placeholder: provided => ({
        ...provided,
        ...theme.inputStyle['::placeholder'],
      }),
    }}
    {...{ options, ...props }}
    value={_.find({ value }, options)}
    onChange={option => props.onChange(option.value)}
    components={{
      DropdownIndicator: ({ isFocused }) => (
        <Icon
          icon="Expand"
          size={3}
          style={{ marginRight: spaces.sm, opacity: isFocused ? 1 : 0.5 }}
        />
      ),
    }}
  />
)

let Select = (
  { options, native = false, placeholder = 'Please Select...', ...props },
  ref
) => {
  let Component = native ? NativeSelect : ReactSelect
  return <Component {...{ options, placeholder, ref, ...props }} />
}

export default _.flow(
  React.forwardRef,
  observer
)(Select)
