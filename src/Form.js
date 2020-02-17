/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, Flex, Title, Text } from '.'
import theme from './theme'

export let Form = props => (
  <Flex css={{ width: theme.widths.lg }} column gap="md" {...props} />
)

export let FormHeader = ({ title, description, ...props }) => (
  <div {...props}>
    {title && (
      <Title small as="div">
        {title}
      </Title>
    )}
    {description && <Text>{description}</Text>}
  </div>
)

export let FormContent = props => <Grid rowGap={2} columnGap={3} {...props} />

export let FormFooter = props => (
  <Flex gap="sm" css={{ paddingTop: theme.space(1) }} {...props} />
)
