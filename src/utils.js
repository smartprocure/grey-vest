import _ from 'lodash/fp'
import F from 'futil'
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
  onChange: x => F.set(x, ...lens),
})

// plural of _.findKey, returns an array of keys
export let findKeys = _.curry((predicate, data) =>
  _.flow(
    _.pickBy(predicate),
    _.keys
  )(data)
)

export let coalesce = _.find(F.isNotNil)

export let optionsFromArray = F.mapIndexed((label, value) => ({ label, value }))

// Picks values out of `variants` whose keys exist in `props` with a value of true.
// Takes an optional third argument to supply a key to always use. Return an array.
// ({ a: true, b: false }, { a: 'foo', b: 'bar', c: 'qux' }, 'c') -> ['qux', 'foo']
export let getVariants = (props, variants, defaultKey = 'default') =>
  _.flow(
    _.pick(_.compact([defaultKey, ...findKeys(_.eq(true), props)])),
    _.values
  )(variants)

// Returns only the last variant of getVariants
export let getVariant = (...args) => _.last(getVariants(...args))
