import React from 'react'
import { TextInput } from '..'

export default { title: 'TextInput', component: TextInput }

export let baseUsage = () => <TextInput placeholder="Enter some text..." />

export let disabled = () => <TextInput disabled placeholder="I am disabled with a placeholder" />

export let disabledWithValue = () => <TextInput disabled value="I am disabled with a value" />