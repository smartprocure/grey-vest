import React from 'react'
import Grid from './Grid'

// form
// - onSubmit
// - resetButton
// - columns (maybe all grid props??)

let Form = ({ onSubmit, children, ...props }) => (
  <form {...{ onSubmit }}>
    <Grid gap={3} {...props}>{children}</Grid>
  </form>
)

export default Form
