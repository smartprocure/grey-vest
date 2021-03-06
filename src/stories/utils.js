import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'
import _ from 'lodash/fp'
import React from 'react'
import { Flex, FormField, Divider } from '..'

export let optionsFromArray = F.mapIndexed((label, value) => ({ label, value }))

export let lipsum = (count, units) => loremIpsum({ count, units })

export let Controls = ({ state, fields, children }) => (
  <>
    <Flex gap="sm" justifyContent="space-evenly" alignItems="center">
      {F.mapIndexed(
        (lens, key) => (
          <FormField
            label={key}
            {..._.get(key, fields)}
            type={_.getOr('number', [key, 'type'], fields)}
            {...F.domLens.value(lens)}
          />
        ),
        state
      )}
      {children}
    </Flex>
    <Divider margin="md" />
  </>
)

export let setDescription = (story = {}, storyDescription) => {
  story.story = { ...story.story, parameters: { docs: { storyDescription } } }
}

export let setName = (story = {}, name) => {
  story.story = { ...story.story, name }
}
