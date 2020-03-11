import React from 'react'
import F from 'futil'
import _ from 'lodash/fp'
import theme from './theme'
import { getVariant, omitKeysFrom } from './utils'

let sizes = { default: 2, small: 1, large: 4 }
let sizeVariants = _.mapValues(F.getIn(theme.fontSizes), sizes)

let Icon = React.forwardRef(({ icon, style, className, ...props }, ref) =>
  _.isFunction(icon) ? (
    icon()
  ) : (
    <i
      className={`material-icons ${className}`}
      style={{ fontSize: getVariant(props, sizeVariants), ...style }}
      {...{ ref, ...omitKeysFrom(sizeVariants, props) }}
    >
      {icon}
    </i>
  )
)

export default Icon
