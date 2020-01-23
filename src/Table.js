/** @jsx jsx */
import { jsx } from '@emotion/core'

let Table = x => (
  <div style={{ overflow: 'auto' }}>
    <table
      css={{
        borderCollapse: 'collapse',
        width: '100%',
        'tr': {
          borderBottom: 'solid 2px rgba(237, 237, 237, 0.43)',
        },
        'td, th': {
          padding: 16,
          textAlign: 'left',
        },
        'th > span': {
          display: 'flex',
          alignItems: 'center',
        },
        '.expanded, .expanded + tr': {
          background: 'rgba(237, 237, 237, 0.5)',
        },
      }}
      {...x}
    />
  </div>
)
export default Table
