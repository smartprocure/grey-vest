export let flag = {
  type: { summary: 'boolean' },
  defaultValue: { summary: 'false' },
}

export let asProp = {
  name: 'as',
  description:
    'Accepts a React component or a string representing a DOM element',
  type: { summary: 'Component | string' },
}

export let disabled = {
  name: 'disabled',
  ...flag,
}

export let spacingValue = {
  type: { summary: 'SpacingValue', detail: `
number | string
/* A spacing value can be either a number, which is multiplied by 8 to obtain
pixel measurements, or a string alias ("xs", "sm", "md", or "lg"). You can
also specify arbitrary values by passing them as strings (e.g. "200px"). */
` },
  defaultValue: { summary: 0 },
}

export let cssValue = {
  type: { summary: 'CSSValue', detail: `
number | string
/* If number, is converted to pixel units in CSS.
If string, units should be specified. */
` }
}
