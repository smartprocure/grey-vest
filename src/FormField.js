import _ from 'lodash/fp'
import { defaultProps } from 'recompose'
import React from 'react'
import Flex from './Flex'
import GridItem from './GridItem'
import Icon from './Icon'
import Tooltip from './Tooltip'
import { Text } from './Typography'
import DateInput from './DateInput'
import TextInput from './TextInput'
import Textarea from './Textarea'
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
  checkboxList: CheckboxList,
  select: Select,
  radioList: RadioList,
  tags: TagsInput,
}

let gridItemProps = ['as', 'column', 'row', 'area', 'width', 'height', 'place']

let FormField = ({
  label,
  type = 'text',
  component: As = types[type],
  tooltip,
  required,
  error,
  ...props
}) => (
  <Flex column as={GridItem} {..._.pick(gridItemProps, props)}>
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
          size={2}
          style={{ color: theme.colors.info, cursor: 'help' }}
          data-tip={tooltip}
        />
      )}
    </Flex>
    <As {...{ error, ..._.omit(gridItemProps, props) }} />
    {error && (
      <Flex
        alignItems="center"
        gap="xs"
        style={{ color: theme.colors.error, marginTop: theme.spaces.xs }}
      >
        <Icon icon="error_outline" size={2} />
        <Text extraSmall>{error}</Text>
      </Flex>
    )}
    <Tooltip place="right" effect="solid" />
  </Flex>
)

export default FormField
