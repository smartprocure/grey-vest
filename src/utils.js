import _ from 'lodash/fp'
import * as F from 'futil'
import { useState } from 'react'
import { mapProps } from 'recompose'

export let useLensObject = _.mapValues(useState)

// (k, a -> {b}) -> Component<{k: a}> -> Component<{b}>
export let expandProp = _.flow(
  (key, fn) => F.expandObjectBy(key, F.whenExists(fn)),
  mapProps
)

export let openBinding = (...lens) => ({
  isOpen: F.view(...lens),
  onClose: F.off(...lens),
})
