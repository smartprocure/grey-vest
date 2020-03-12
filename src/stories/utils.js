import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'
import _ from 'lodash/fp'
import React from 'react'
import { Flex, FormField, Divider } from '..'

export let optionsFromArray = F.mapIndexed((label, value) => ({ label, value }))

export let lipsum = (count, units) => loremIpsum({ count, units })

export let Controls = ({ state, types }) => (
  <>
    <Flex gap="sm" justifyContent="space-evenly">
      {F.mapIndexed(
        (lens, key) => (
          <FormField label={key} type={_.getOr('number', key, types)} {...F.domLens.value(lens)} />
        ),
        state
      )}
    </Flex>
    <Divider margin="md" />
  </>
)
