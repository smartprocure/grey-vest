import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import _ from 'lodash/fp'
import F from 'futil'
import { TagsInput, Divider } from '..'
import { flag, func, element } from './commonProps'

let props = {
  rows: [
    { name: 'tags', type: { summary: 'string[]' } },
    {
      name: 'flipped',
      ...flag,
      description:
        'Variant with the input above and tags in right-to-left order.',
    },
    { name: 'readOnly', ...flag },
    { name: 'splitCommas', ...flag },
    { name: 'autoFocus', ...flag, description: 'Passed through to the input.' },
    { name: 'addTag', ...func },
    { name: 'removeTag', ...func },
    { name: 'submit', ...func },
    { name: 'tagStyle', type: { summary: 'object' } },
    {
      name: 'placeholder',
      type: { summary: 'string' },
      defaultValue: { summary: "'Search...'" },
    },
    { name: 'onBlur', ...func },
    { name: 'onInputChange', ...func },
    { name: 'onTagClick', ...func },
    { name: 'Tag', type: element },
  ],
}

export default {
  title: 'TagsInput',
  component: TagsInput,
  parameters: { props },
}

let initialTags = [
  `Multiline tag! ${loremIpsum({ count: 4 })}`,
  'populate some tags to start with',
  "so we don't have to add them fresh every time",
]

export let baseUsage = () => {
  let [tags, setTags] = React.useState(initialTags)
  return (
    <>
      <TagsInput
        tags={tags}
        addTag={tag => setTags(F.push(tag))}
        removeTag={tag => setTags(_.pull(tag))}
      />
      <Divider margin="md" />
      <code>{JSON.stringify(tags)}</code>
    </>
  )
}

export let empty = () => {
  let [tags, setTags] = React.useState([])
  return (
    <>
      <TagsInput
        tags={tags}
        addTag={tag => setTags(F.push(tag))}
        removeTag={tag => setTags(_.pull(tag))}
      />
      <Divider margin="md" />
      <code>{JSON.stringify(tags)}</code>
    </>
  )
}

export let flipped = () => {
  let [tags, setTags] = React.useState(['input above', 'tags below'])
  return (
    <>
      <TagsInput
        flip
        tags={tags}
        addTag={tag => setTags(F.push(tag))}
        removeTag={tag => setTags(_.pull(tag))}
      />
      <Divider margin="md" />
      <code>{JSON.stringify(tags)}</code>
    </>
  )
}
