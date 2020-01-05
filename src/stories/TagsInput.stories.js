import React from 'react'
import { TagsInput } from '..'
import _ from 'lodash/fp'
import F from 'futil'
import decorator from './decorator'

export default {
  title: 'TagsInput',
  decorators: [decorator],
  component: TagsInput,
}

export let baseUsage = () => {
  let [tags, setTags] = React.useState([
    'populate some tags to start with',
    "so we don't have to add them fresh every time",
    'hello world',
    'tag',
    'extra tag',
    'gosh wow this is a lot of tags'
  ])
  return (
    <>
      <TagsInput
        tags={tags}
        addTag={tag => setTags(F.push(tag))}
        removeTag={tag => setTags(_.pull(tag))}
      />
      <pre>Tags: {JSON.stringify(tags, 0, 2)}</pre>
    </>
  )
}
