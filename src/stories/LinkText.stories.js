import React from 'react'
import { action } from '@storybook/addon-actions'
import { LinkText } from '..'

let click = action('clicked')

export default { title: 'LinkText', component: LinkText }

export let story = () => <div>To delete your account, please <LinkText onClick={() => click()}>click here</LinkText>.</div>
