/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, Flex, Title, Text } from '.'
import theme from './theme'

let Form = props => (
  <Flex css={{ width: theme.widths.lg }} column gap={2} {...props} />
)

Form.Header = ({ title, description, ...props }) => (
  <div {...props}>
    {title && (
      <Title small as="div">
        {title}
      </Title>
    )}
    {description && <Text>{description}</Text>}
  </div>
)

Form.Content = props => <Grid rowGap={2} columnGap={3} {...props} />

Form.Footer = props => (
  <Flex gap={1} css={{ paddingTop: theme.space(1) }} {...props} />
)

export default Form
