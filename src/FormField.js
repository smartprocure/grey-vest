import _ from 'lodash/fp'
import { defaultProps, renameProp } from 'recompose'
import React from 'react'
import Flex from './Flex'
import GridItem from './GridItem'
import Icon from './Icon'
import Tooltip from './Tooltip'
import { Text } from './Typography'
import DateInput from './DateInput'
import TextInput from './TextInput'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import CheckboxList from './CheckboxList'
import Select from './Select'
import RadioList from './RadioList'
import TagsInput from './TagsInput'
import theme from './theme'

let types = {
  date: DateInput,
  text: TextInput,
  number: defaultProps({ type: 'number' })(TextInput),
  textarea: Textarea,
  checkbox: renameProp('value', 'checked')(Checkbox),
  checkboxList: CheckboxList,
  select: Select,
  radioList: RadioList,
  tags: TagsInput,
}

let wrapperProps = [
  'as',
  'column',
  'row',
  'area',
  'width',
  'height',
  'place',
  'style',
]

let FormField = ({
  label,
  type = 'text',
  component: As = types[type],
  tooltip,
  required,
  error,
  hideLabel,
  ...props
}) => (
  <Flex column as={GridItem} {..._.pick(wrapperProps, props)}>
    {!hideLabel && (
      <Flex alignItems="center" gap="xs">
        <Text small style={{ fontWeight: 600 }}>
          {label}{' '}
          {required && (
            <span
              style={{
                fontSize: theme.fontSizes[3],
                lineHeight: 0,
                color: theme.colors.error,
                verticalAlign: 'middle',
              }}
            >
              *
            </span>
          )}
        </Text>
        {tooltip && (
          <Icon
            icon="info"
            small
            style={{ color: theme.colors.info, cursor: 'help' }}
            data-tip={tooltip}
          />
        )}
      </Flex>
    )}
    <As
      data-tip={hideLabel && tooltip}
      {...{ error, ..._.omit(wrapperProps, props) }}
    />
    {error && (
      <Flex
        gap="xs"
        style={{ color: theme.colors.error, marginTop: theme.spaces.xs }}
      >
        <Icon icon="error_outline" small style={{ marginTop: 1 }} />
        <Text extraSmall>{error}</Text>
      </Flex>
    )}
    <Tooltip place="right" effect="solid" />
  </Flex>
)

export default FormField
