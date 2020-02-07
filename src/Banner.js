/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon, Text, Flex } from '.'
import theme from './theme'
import { getVariant } from './utils'
let { colors } = theme

let styleFromVariant = ({ backgroundColor, textColor }) => ({
  backgroundColor,
  '&, span, a': { color: `${textColor} !important` },
})

let variants = {
  regular: {
    backgroundColor: colors.primary,
    textColor: colors.backgrounds[0],
    icon: 'priority_high',
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

let Banner = ({ children, icon, ...props }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={[
      { padding: theme.spaces.xs },
      styleFromVariant(getVariant(props, variants, 'regular')),
    ]}
    gap="xs"
    {...props}
  >
    <Icon
      icon={icon || getVariant(props, variants, 'regular').icon}
      style={{ verticalAlign: 'text-bottom' }}
    />
    <Text small>{children}</Text>
  </Flex>
)

export default Banner
