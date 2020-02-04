import React from 'react'
import TextButton from './TextButton'
import Icon from './Icon'

let IconButton = ({ icon, ...props }) => (
  <TextButton {...props}>
    <Icon icon={icon} />
  </TextButton>
)

export default IconButton
