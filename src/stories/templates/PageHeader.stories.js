/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import F from 'futil'
import { Flex, Button, Subtitle, Dropdown, DropdownItem } from '../..'
import theme from '../../theme'

export default { title: 'Demos | Page Header' }

export let story = () => {
  let SubSection = ({ active, title, onClick, children, ...props }) => {
    let open = React.useState(false)
    return (
      <div>
        <Button.Ghost
          compact
          style={{ color: !active && theme.colors.secondaries[1] }}
          icon={children && 'arrow_drop_down'}
          onClick={() => {
            F.flip(open)()
            onClick()
          }}
          {...props}
        >
          {title}
        </Button.Ghost>
        {children && <Dropdown open={open}>{children}</Dropdown>}
      </div>
    )
  }
  let InfoButton = props => (
    <Button
      css={{
        color: theme.colors.neutrals[0],
        backgroundColor: theme.colors.infos[1],
        paddingTop: 1,
        paddingBottom: 1,
      }}
      {...props}
    />
  )

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: theme.colors.neutrals[1],
        padding: `${theme.space(1)}px ${theme.space(2)}px`,
        borderBottom: `1px solid ${theme.colors.neutrals[3]}`,
      }}
    >
      <Flex gap={1} alignItems="center">
        <Subtitle large>Section</Subtitle>
        <SubSection active title="Sub-section 1" />
        <SubSection title="Sub-section 2" />
        <SubSection title="Sub-section 3">
          <DropdownItem>Subsection item 1</DropdownItem>
          <DropdownItem>Subsection item 2</DropdownItem>
          <DropdownItem>Subsection item 3</DropdownItem>
        </SubSection>
      </Flex>

      <Flex gap={1}>
        <InfoButton compact icon="map">
          Product Tour
        </InfoButton>
        <InfoButton compact icon="chat">
          Help Chat
        </InfoButton>
      </Flex>
    </Flex>
  )
}
