import React from 'react'
import { action } from '@storybook/addon-actions'
import { LinkButton } from '..'

let click = action('clicked')

export default { title: 'LinkButton', component: LinkButton }

export let story = () => <LinkButton onClick={() => click()}>Click</LinkButton>
