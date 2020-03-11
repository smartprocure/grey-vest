import _ from 'lodash/fp'
import F from 'futil'

export let convertType = F.unless(
  _.overEvery(_.isObject, _.has('summary')),
  summary => ({ summary })
)

export let convertTypes = F.expandObject(
  _.flow(
    _.pick(['type', 'defaultValue']),
    _.mapValues(convertType)
  )
)

export let convertProps = _.flow(
  F.unless(_.isArray, F.unkeyBy('name')),
  _.map(convertTypes)
)
