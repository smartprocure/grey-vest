import React from 'react'
import { observer } from 'mobx-react'

let loadingStyle = {
  backgroundImage:
    'linear-gradient(-45deg, rgba(200, 200, 200, 0.2) 25%, transparent 25%, transparent 50%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.2) 75%, transparent 75%, transparent',
  backgroundSize: '1rem 1rem',
  opacity: 0.5,
}

let StripedLoader = ({ loading, style = {}, children }) => (
  <div style={{ ...style, ...(loading && loadingStyle) }}>{children}</div>
)

export default observer(StripedLoader)
