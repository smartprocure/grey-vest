import _ from 'lodash/fp'
import React from 'react'
import Flex from './Flex'
import GridItem from './GridItem'
import Icon from './Icon'
import Tooltip from './Tooltip'
import { Text } from './Typography'
import theme from './theme'

// - form field: same api as autoform field config?
// - label (startcased?)
// - component (type?) - string 'text/date/radio/select/etc' (autoform types?)
// - tooltip/info/help
// - error - display underneath - singular or plural? mobx autoform is plural

// props for component
// - error - passes through to act as flag (component should do red border if truthy)
// - placeholder
// - value
// - options
// - 'props' prop? no, this is unnecessary, let's spread it in autoform
// - ...etc (anything else passed in)

let gridItemProps = ['as', 'column', 'row', 'area', 'width', 'height', 'place']

let FormField = ({
  label,
  component: As,
  tooltip,
  required,
  error,
  ...props
}) => (
  <GridItem {..._.pick(gridItemProps, props)}>
    <Flex alignItems="center" gap="xs">
      <Text small style={{ fontWeight: 600 }}>
        {label}{' '}
        {required && (
          <span
            style={{
              fontSize: theme.fontSizes[3],
              lineHeight: 0,
              color: theme.colors.errors[2],
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
          style={{ color: theme.colors.infos[0], cursor: 'help' }}
          data-tip={tooltip}
        />
      )}
    </Flex>
    <As {...{ error, ..._.omit(gridItemProps, props) }} />
    {error && (
      <Flex
        alignItems="center"
        gap="xs"
        style={{ color: theme.colors.errors[2], marginTop: theme.spaces.xs }}
      >
        <Icon icon="error_outline" size={2} />
        <Text extraSmall>{error}</Text>
      </Flex>
    )}
    <Tooltip place="right" effect="solid" />
  </GridItem>
)

export default FormField
