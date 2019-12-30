/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import F from 'futil'
import { defaultProps } from 'recompose'
import { Icon, Text, Flex } from '.'
import theme from './theme'

let getColor = F.aliasIn(theme.colors)

let bannerStyle = (bgColor, textColor) => ({
  backgroundColor: getColor(bgColor),
  '*': { color: `${getColor(textColor)} !important` },
})

let BaseBanner = ({ children, icon = 'priority_high', ...props }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ padding: theme.spaces[1] }}
    {...props}
  >
    <Icon icon={icon} style={{ marginRight: theme.spaces[1], verticalAlign: 'text-bottom' }} />
    <Text small as='span'>{children}</Text>
  </Flex>
)

let Banner = styled(BaseBanner)(bannerStyle('primaries.0', 'neutrals.0'))

Banner.Warning = styled(defaultProps({ icon: 'warning' })(BaseBanner))(
  bannerStyle('warning', 'secondaries.1')
)
Banner.Error = styled(defaultProps({ icon: 'report' })(BaseBanner))(
  bannerStyle('errors.1', 'neutrals.0')
)

export default Banner
