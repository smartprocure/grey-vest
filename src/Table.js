/** @jsx jsx */
import { jsx } from '@emotion/core'
import { padding } from 'polished'
import theme from './theme'

let Table = ({ plain, ...props }) => (
  <div style={{ overflow: 'auto' }}>
    <table
      css={{
        borderCollapse: 'collapse',
        width: '100%',
        'tbody tr:nth-child(2n)': {
          backgroundColor: !plain && `${theme.colors.neutrals[2]}19`,
        },
        'td, th': {
          boxSizing: 'border-box',
          ...padding(theme.spaces.sm, theme.spaces.md),
          minWidth: theme.widths.tableColumn.min,
          maxWidth: theme.widths.tableColumn.max,
          ...theme.fonts.Text,
        },
        th: {
          ...theme.fonts.Text.variants.small,
          fontWeight: 600,
          textAlign: 'left',
          borderBottom: `1px solid ${theme.colors.neutrals[0]}`,
          '> span': {
            display: 'flex',
            alignItems: 'center',
          },
        },
        'tr:hover': { zIndex: 20, boxShadow: theme.boxShadows.normal },
      }}
      {...props}
    />
  </div>
)
export default Table
