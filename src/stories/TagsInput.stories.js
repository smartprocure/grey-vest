import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import { TagsInput, Divider } from '..'
import _ from 'lodash/fp'
import F from 'futil'

export default { title: 'TagsInput', component: TagsInput }

let initialTags = [
  `Multiline tag! ${loremIpsum({ count: 4 })}`,
  'populate some tags to start with',
  "so we don't have to add them fresh every time",
  'hello world',
  'tag',
  'another tag',
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
      <Divider m={2} />
      <code>{JSON.stringify(tags)}</code>
    </>
  )
}
