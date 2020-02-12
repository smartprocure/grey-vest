import React from 'react'
import { IconButton } from '..'

export default { title: 'IconButton', component: IconButton }

export let story = () => <IconButton icon="more_vert" />

export let withCustomIcon = () => <IconButton icon={() => <div>💃</div>} />
