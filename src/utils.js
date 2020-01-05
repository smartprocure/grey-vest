import _ from 'lodash/fp'
import * as F from 'futil'
import React, { useState } from 'react'
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

// plural of _.findKey, returns an array of keys
export let findKeys = _.curry((predicate, data) =>
  _.flow(
    _.pickBy(predicate),
    _.keys
  )(data)
)

export let coalesce = _.find(F.isNotNil)

// ({ r: 'red', b: 'blue' g: 'green' }) -> Component<{ red, blue, green }> -> Component<{ red, blue, green, r, g, b }>
export let withAliasProps = aliases => Component => props => (
  <Component {..._.mapKeys(F.aliasIn(aliases), props)} />
)
// possible futil method?
// ({ r: 'red', b: 'blue' }) -> ({ r: 5, green: 1 }) -> ({ red: 5, green: 1 })
// let aliasKeys = aliases => _.mapKeys(F.aliasIn(aliases))
