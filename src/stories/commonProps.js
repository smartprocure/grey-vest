import theme from '../theme'

export let flag = {
  type: { summary: 'boolean' },
  defaultValue: { summary: 'false' },
}

export let element = {
  summary: 'JSXElement',
  detail: '/* React component or a string representing a DOM element */',
}

export let asProp = { name: 'as', type: element }

export let disabled = { name: 'disabled', ...flag }

export let spacingValue = {
  summary: 'SpacingValue',
  detail: `
'xs' | 'sm' | 'md' | 'lg' | CSSValue
/* A spacing value can be either a string alias to a
theme spacing value (one of "xs", "sm", "md", or "lg"),
or a regular CSS-in-JS value (a number or a string). */
`,
}

export let cssValue = {
  summary: 'CSSValue',
  detail: `
number | string
/* If number, is converted to pixel units in CSS.
If string, units should be specified. */
`,
}

export let func = {
  type: { summary: 'function' },
  defaultValue: { summary: '() => {}' },
}


export let optionProps = {
  value: {
    type: 'any',
    description:
      'Matches the `value` property of the selected option. Can be any type, but should be shallow-comparable.',
  },
  options: {
    type: {
      summary: 'Option[]',
      detail: 'type Option = { label: string, value: any, disabled?: boolean }',
    },
    defaultValue: '[]',
  },
  onChange: {
    type: { summary: 'function', detail: '(value: any) => void' },
    description: 'Called with the value of the selected option',
  },
}

export let columnProps = {
  gap: {
    type: spacingValue,
    defaultValue: 0,
    description: 'Vertical spacing between each element in the list',
  },
  columnGap: {
    type: spacingValue,
    defaultValue: 0,
    description: 'Horizontal spacing between columns',
  },
  columnCount: {
    type: 'number',
    defaultValue: 1,
    description: '_Maximum_ number of columns',
  },
  columnWidth: {
    type: cssValue,
    defaultValue: theme.widths.xs,
    description: '_Minimum_ width of each column',
  },
}
