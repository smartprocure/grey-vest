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

export let getVariants = (props, variants) =>
  _.flow(
    _.pick(findKeys(_.eq(true), props)),
    _.values
  )(variants)
