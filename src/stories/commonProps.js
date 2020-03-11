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
