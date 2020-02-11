import React from 'react'
import { action } from '@storybook/addon-actions'
import { LinkText, Subtitle } from '..'

let click = action('clicked')

export default { title: 'LinkText', component: LinkText }

export let story = () => <LinkText onClick={() => click()}>Click me</LinkText>

export let inline = () => (
  <Subtitle small>
    To delete your account, please <LinkText>click here</LinkText>.
  </Subtitle>
)

export let inlineButton = () => (
  <Subtitle small>
    To delete your account, please <LinkText as="button">click here</LinkText>.
  </Subtitle>
)
