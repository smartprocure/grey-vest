import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'
import React from 'react'
import { Flex, FormField } from '..'

export let optionsFromArray = F.mapIndexed((label, value) => ({ label, value }))

export let lipsum = (count, units) => loremIpsum({ count, units })

export let Controls = ({ state }) => (
  <Flex gap="sm" justifyContent="space-evenly">
    {F.mapIndexed(
      (lens, key) => (
        <FormField label={key} type="number" {...F.domLens.value(lens)} />
      ),
      state
    )}
  </Flex>
)
