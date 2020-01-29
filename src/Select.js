/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import BaseReactSelect from 'react-select'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme from './theme'
let { spaces, fonts, colors } = theme

let NativeSelect = ({ placeholder, options, ...props }) => (
  <select {...props} css={[theme.inputStyle, { height: 40 }]}>
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
      control: (provided, state) => ({
        display: 'flex',
        outline: 'none',
        ..._.omit(['padding'], theme.inputStyle),
        ...(state.isFocused && theme.inputStyle['&:focus']),
      }),
      input: provided => ({ ...provided, margin: 0 }),
      menu: provided => ({
        ...provided,
        marginTop: spaces.xs,
        boxShadow: theme.boxShadows.popup,
        borderRadius: theme.borderRadius,
      }),
      option: () => ({
        ...fonts.Text,
        ...fonts.Text.variants.small,
        color: colors.neutrals[8],
        cursor: 'pointer',
        margin: `${spaces.xs}px ${spaces.sm}px`,
        '&:hover': { color: colors.primaries[0] },
      }),
    }}
    {...{ options, ...props }}
    value={_.find({ value }, options)}
    onChange={option => props.onChange(option.value)}
  />
)

let Select = (
  { options, native = false, placeholder = 'Please Select...', ...props },
  ref
) => {
  let Component = native ? NativeSelect : ReactSelect
  return <Component {...{ options, placeholder, ref, ...props }} />
}

export default _.flow(React.forwardRef, observer)(Select)
