import React from 'react'
import { Text } from '../..'

let SizeInfo = ({ config }) => (
  <div style={{ paddingRight: 16, whiteSpace: 'nowrap' }}>
    <Text>
      {config.fontSize} / {config.lineHeight * config.fontSize}
    </Text>
  </div>
)
export default SizeInfo
