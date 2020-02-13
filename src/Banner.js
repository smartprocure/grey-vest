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
  default: {
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

let Banner = ({ children, icon, ...props }) => {
  let variant = getVariant(props, variants)
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      css={[{ padding: theme.spaces.xs }, styleFromVariant(variant)]}
      gap="xs"
      {...props}
    >
      <Icon
        icon={icon || variant.icon}
        style={{ verticalAlign: 'text-bottom' }}
      />
      <Text small>{children}</Text>
    </Flex>
  )
}

export default Banner
