import * as F from 'futil-js'
import _ from 'lodash/fp'
import React from 'react'
import { inject, observer } from 'mobx-react'
import { ModalPicker, Modal, NestedPicker, Dynamic, Grid } from '../layout/'
import { fieldsToOptions } from '../FilterAdder'
import { defaultProps } from 'recompose'
import { get } from '../utils/mobx-utils'

let FieldPicker = defaultProps({
  Modal,
  Picker: NestedPicker,
})(ModalPicker)

let DefaultMissingTypeComponent = ({ node = {} }) => (
  <div>
    Type <b>{node.type}</b> is not supported (for key <i>{node.key}</i>)
  </div>
)

let FilterContents = inject(_.defaults)(
  observer(
    ({
      node,
      root,
      fields,
      types = {},
      ContextureButton = 'button',
      mapNodeToProps = _.noop,
      MissingTypeComponent = DefaultMissingTypeComponent,
    }) => {
      // `get` allows us to create a dependency on field before we know it exists (because the client will only add it if it's a type that uses it as it wouldn't make sense for something like `results`)
      let nodeField = get(node, 'field')
      let typeOptions = _.get([nodeField, 'typeOptions'], fields) || []
      if (!_.includes(node.type, typeOptions))
        typeOptions = [...typeOptions, node.type]
      let nodeLabel = _.get([nodeField, 'label'], fields) || nodeField
      return (
        <Grid columns="auto auto 1fr" style={{ width: '100%' }}>
          <FieldPicker
            Button={ContextureButton}
            label={nodeField ? nodeLabel : 'Pick a Field'}
            options={fieldsToOptions(fields)}
            // TODO: consider type options in case this isn't safe, e.g. a field/type change action
            onChange={field => root.mutate(node.path, { field })}
          />
          {nodeField && (
            <div style={{ margin: '0 5px' }}>
              <select
                onChange={({ target: { value } }) => {
                  root.typeChange(node, value)
                }}
                value={F.when(_.isNil, undefined)(node.type)} // fix null value issue...
              >
                {_.map(
                  x => (
                    <option key={x.value} value={x.value} disabled={x.disabled}>
                      {x.label}
                    </option>
                  ),
                  [
                    {
                      value: null,
                      label: 'Select Type',
                      disabled: node.type,
                    },
                    ...F.autoLabelOptions(typeOptions),
                  ]
                )}
              </select>
            </div>
          )}
          {node.type && (
            <div
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                width: '100%',
                marginRight: '5px',
              }}
            >
              <Dynamic
                component={types[node.type] || MissingTypeComponent}
                tree={root}
                node={node}
                {...mapNodeToProps(node, fields, types)}
              />
            </div>
          )}
        </Grid>
      )
    }
  )
)
FilterContents.displayName = 'FilterContents'

export default FilterContents
