export let flag = {
  type: { summary: 'boolean' },
  defaultValue: { summary: 'false' },
}

export let asProp = {
  name: 'as',
  description: 'Accepts a React component or a string representing a DOM element',
  type: { summary: 'Component | string' },
}

export let disabled = {
  name: 'disabled',
  ...flag
}
