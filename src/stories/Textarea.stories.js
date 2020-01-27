import React from 'react'
import { Textarea } from '..'

export default { title: 'Textarea', component: Textarea }

export let baseUsage = () => <Textarea placeholder="Enter some text..." />

export let disabled = () => <Textarea disabled placeholder="I am disabled with a placeholder" />

export let disabledWithValue = () => <Textarea disabled value="I am disabled with a value" />
