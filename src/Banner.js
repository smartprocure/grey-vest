/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import F from 'futil'
import _ from 'lodash/fp'
import { defaultProps } from 'recompose'
import { Icon, Text, Flex } from '.'
import theme from './theme'
let { colors } = theme

let BaseBanner = ({ children, icon = 'priority_high', ...props }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ padding: theme.spaces[1] }}
    {...props}
  >
    <Icon
      icon={icon}
      style={{ marginRight: theme.spaces[1], verticalAlign: 'text-bottom' }}
    />
    <Text small as="span">
      {children}
    </Text>
  </Flex>
)

let convertBannerStyles = ({ backgroundColor, textColor, icon }) =>
  styled(defaultProps({ icon })(BaseBanner))({
    backgroundColor,
    '&, span, a': { color: `${textColor} !important` },
  })

let bannerStyles = _.mapValues(convertBannerStyles, {
  Warning: {
    backgroundColor: colors.warning,
    textColor: colors.secondaries[1],
    icon: 'warning',
  },
  Error: {
    backgroundColor: colors.errors[1],
    textColor: colors.neutrals[0],
    icon: 'report',
  },
})

let Banner = convertBannerStyles({
  backgroundColor: colors.primaries[0],
  textColor: colors.neutrals[0],
})

F.extendOn(Banner, bannerStyles)
export default Banner
