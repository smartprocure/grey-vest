import React from 'react'
import F from 'futil'
import {
  Grid,
  FormField,
  TextInput,
  Button,
  Flex,
  Box,
  Title,
  Text,
} from '..'
import theme from '../theme'

export default { title: 'Demos | Form' }

export let story = () => (
  <Flex as={Box} style={{ width: theme.widths.lg }} column gap={3}>
    <div>
      <Title small as="div">Form title</Title>
      <Text>Lorem ipsum massa odio euismod. Scelerisque Cras quam. Nibh. Lorem, pharetra ultricies dolor id nibh. </Text>
    </div>
    <Grid rowGap={2} columnGap={3} columns={2}>
      <FormField
        label="First name"
        tooltip="this is a tooltip"
        placeholder="Select a name..."
        required
        type="select"
        options={F.autoLabelOptions(['Jerry', 'George', 'Elaine', 'Cosmo'])}
      />
      <FormField
        label="Last name"
        placeholder="Enter text..."
        component={TextInput}
        error="This is an error message that extends to the next line"
      />
      <FormField
        width={2}
        label="Favorite color"
        tooltip="this is a tooltip"
        required
        type="radioList"
        options={F.autoLabelOptions(['red', 'blue', 'yellow', 'pink'])}
        columnCount={2}
      />
    </Grid>
    <Flex gap={1}>
      <Button.Primary>Submit</Button.Primary>
      <Button.Secondary>Cancel</Button.Secondary>
    </Flex>
  </Flex>
)
