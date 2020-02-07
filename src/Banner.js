/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { Icon, Text, Flex } from '.'
import theme from './theme'
import { getVariants } from './utils'
let { colors } = theme

let styleFromVariant = ({ backgroundColor, textColor }) => ({
  backgroundColor,
  '&, span, a': { color: `${textColor} !important` },
})

let variants = {
  regular: {
    backgroundColor: colors.primary,
    textColor: colors.backgrounds[0],
  },
  warning: {
    backgroundColor: colors.warning,
    textColor: colors.secondary,
    icon: 'warning',
  },
  error: {
    backgroundColor: colors.error,
    textColor: colors.backgrounds[0],
    icon: 'report',
  },
}

let Banner = ({ children, icon = 'priority_high', ...props }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={[
      { padding: theme.spaces.xs },
      _.map(styleFromVariant, getVariants({ regular: true, ...props }, variants)),
    ]}
    gap="xs"
    {...props}
  >
    <Icon
      icon={getVariants(props, variants).icon || icon}
      style={{ verticalAlign: 'text-bottom' }}
    />
    <Text small>{children}</Text>
  </Flex>
)

export default Banner
