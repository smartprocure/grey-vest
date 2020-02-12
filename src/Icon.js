import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import theme from './theme'

let Icon = ({ icon, style, size = 2, className, ...props }) =>
  _.isFunction(icon) ? (
    icon()
  ) : (
    <i
      className={`material-icons ${className}`}
      style={{ fontSize: F.alias(size, theme.fontSizes), ...style }}
      {...props}
    >
      {icon}
    </i>
  )

export default Icon
