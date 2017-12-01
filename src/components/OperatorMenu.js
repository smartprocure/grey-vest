import React from 'react'
import * as F from 'futil-js'
import {hover, Component} from '../mobx-react-utils'
import styles from '../styles'
import {oppositeJoin} from '../searchUtils'
let {btn, joinColor, bgJoin} = styles

let OperatorMenu = ({tree, parent, root, parentTree}) => (
  <div>
    {F.mapIndexed(
      (join, i) =>
        tree.join !== join && (
          <div
            key={join}
            {...hover(x => (parent.joinHover = x && join))}
            style={{...btn, ...bgJoin(join)}}
            onClick={() => root.join(tree, join)}>
            To {join.toUpperCase()}
          </div>
        ),
      ['and', 'or', 'not']
    )}
    <div>
      <div
        style={{
          ...btn,
          color: joinColor(oppositeJoin((parentTree || tree).join)),
          marginTop: 5
        }}
        {...hover(parent.lens.wrapHover)}
        onClick={() => {
          root.indent(parentTree, tree)
          F.off(parent.lens.wrapHover)()
        }}>
        Wrap in {oppositeJoin((parentTree || tree).join).toUpperCase()}
      </div>
    </div>
    <div>
      <div
        {...hover(parent.lens.removeHover)}
        style={{...btn, marginTop: 5}}
        onClick={() => root.remove(parentTree, tree)}>
        Remove
      </div>
    </div>
  </div>
)

export default Component(OperatorMenu)
