/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flex, Button, Subtitle, Title, Dropdown, DropdownItem } from '../..'
import theme from '../../theme'

export default { title: 'Demos | Page Header' }

export let story = () => {
  let SubSection = ({ active, label, children, ...props }) => {
    let buttonProps = {
      ghost: true,
      small: true,
      style: { color: !active && theme.colors.secondary },
      ...props,
    }
    return children ? (
      <Dropdown {...{ label, ...buttonProps }}>{children}</Dropdown>
    ) : (
      <Button {...buttonProps}>{label}</Button>
    )
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: theme.colors.backgrounds[1],
        padding: `${theme.space(1)}px ${theme.space(2)}px`,
        borderBottom: `1px solid ${theme.colors.neutrals[0]}`,
      }}
    >
      <Flex gap="sm" alignItems="center">
        <Subtitle large>Section</Subtitle>
        <SubSection active label="Sub-section 1" />
        <SubSection label="Sub-section 2" />
        <SubSection label="Sub-section 3">
          <DropdownItem>Subsection item 1</DropdownItem>
          <DropdownItem>Subsection item 2</DropdownItem>
          <DropdownItem>Subsection item 3</DropdownItem>
        </SubSection>
        <Dropdown trigger="icon" />
      </Flex>

      <Flex gap="sm">
        <Button info small icon="map">
          Product Tour
        </Button>
        <Button info small icon="chat">
          Help Chat
        </Button>
      </Flex>
    </Flex>
  )
}

export let DetailHeader = () => (
  <Flex
    justifyContent="space-between"
    style={{
      backgroundColor: theme.colors.backgrounds[1],
      padding: `${theme.space(1)}px ${theme.space(2)}px`,
      borderBottom: `1px solid ${theme.colors.neutrals[0]}`,
    }}
  >
    <Title large>Page title</Title>
    <Flex alignItems="center" gap="sm">
      <Button primary>Primary</Button>
      <Dropdown trigger="icon" icon="notifications" />
      <Dropdown trigger="icon" icon="share" />
      <Dropdown trigger="icon" icon="more_vert" />
    </Flex>
  </Flex>
)
