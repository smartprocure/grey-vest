import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import theme from './theme'
import { getVariant } from './utils'

let sizes = _.mapValues(F.getIn(theme.fontSizes), {
  small: 1,
  regular: 2,
  large: 4,
})

let Icon = React.forwardRef(({ icon, style, className, ...props }, ref) =>
  _.isFunction(icon) ? (
    icon()
  ) : (
    <i
      className={`material-icons ${className}`}
      style={{ fontSize: getVariant(props, sizes, 'regular'), ...style }}
      {...{ ref, ...props }}
    >
      {icon}
    </i>
  )
)

export default Icon
