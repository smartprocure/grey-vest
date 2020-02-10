import React from 'react'
import { action } from '@storybook/addon-actions'
import { Link } from '..'

let click = action('clicked')

export default { title: 'Link', component: Link }

export let story = () => <div>To delete your account, please <Link onClick={() => click()}>click here</Link>.</div>
