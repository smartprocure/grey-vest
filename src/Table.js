/** @jsx jsx */
import { jsx } from '@emotion/core'
import theme from './theme'

let Table = x => (
  <div style={{ overflow: 'auto' }}>
    <table
      css={{
        borderCollapse: 'collapse',
        width: '100%',
        'tbody tr:nth-child(2n)': {
          backgroundColor: `${theme.colors.neutrals[6]}19`,
        },
        'td, th': {
          padding: `${theme.spaces.sm}px ${theme.spaces.md}px`,
          ...theme.fonts.Text,
        },
        th: {
          ...theme.fonts.Text.variants.small,
          fontWeight: 600,
          textAlign: 'left',
          borderBottom: `1px solid ${theme.colors.neutrals[4]}`,
          '> span': {
            display: 'flex',
            alignItems: 'center',
          },
        },
        'tr:hover': { zIndex: 20, boxShadow: theme.boxShadows.normal },
      }}
      {...x}
    />
  </div>
)
export default Table
