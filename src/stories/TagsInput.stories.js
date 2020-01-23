import React from 'react'
import { TagsInput, Divider } from '..'
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
    'another tag',
    'Multiline tag! Praesent auctor rhoncus erat eu porta. Aliquam erat volutpat. Nulla tellus justo, ultricies vel interdum eu, accumsan vitae sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  ])
  return (
    <>
      <TagsInput
        tags={tags}
        addTag={tag => setTags(F.push(tag))}
        removeTag={tag => setTags(_.pull(tag))}
      />
      <Divider m={2} />
      <code>{JSON.stringify(tags)}</code>
    </>
  )
}
