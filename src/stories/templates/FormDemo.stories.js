import React from 'react'
import F from 'futil'
import { FormField, TextInput, Button, Box } from '../..'
import Form from '../../Form'

export default { title: 'Demos | Form' }

export let story = () => (
  <Form as={Box}>
    <Form.Header
      title="Form title"
      description="Lorem ipsum massa odio euismod. Scelerisque Cras quam. Nibh. Lorem,
        pharetra ultricies dolor id nibh."
    />
    <Form.Content columns={2}>
      <FormField
        label="First name"
        tooltip="this is a tooltip"
        placeholder="Select a name..."
        type="select"
        options={F.autoLabelOptions(['Jerry', 'George', 'Elaine', 'Cosmo'])}
      />
      <FormField
        label="Last name"
        placeholder="Enter text..."
        error="This is an error message that extends to the next line"
        component={TextInput}
      />
      <FormField width={2} label="Phone number" type="number" placeholder="(xxx)-xxx-xxxx" />
      <FormField
        width={2}
        label="Favorite color"
        tooltip="the other colors aren't important"
        required
        type="radioList"
        options={F.autoLabelOptions([
          'red',
          'blue',
          'yellow',
          'pink',
          'green',
          'orange',
          'purple',
          'black',
          'white',
        ])}
        error="This is an error message on a radio list"
        columnCount={3}
      />
      <FormField
        width={2}
        label="Hobbies"
        required
        type="checkboxList"
        value={['programming']}
        options={[
          { label: 'Programming', value: 'programming', disabled: true },
          ...F.autoLabelOptions(['gaming', 'travel']),
          { label: 'Sports', value: 'sports', disabled: true },
        ]}
        columnCount={2}
      />
      <FormField
        disabled
        width={2}
        label="Disabled field"
        value="This should still be legible"
        component={TextInput}
      />
    </Form.Content>
    <Form.Footer>
      <Button.Primary>Submit</Button.Primary>
      <Button.Secondary>Cancel</Button.Secondary>
    </Form.Footer>
  </Form>
)
