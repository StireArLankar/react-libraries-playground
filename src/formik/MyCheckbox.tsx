import React from 'react'
import { useField, FieldAttributes } from 'formik'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export interface MyCheckboxProps {
  label: string
}

export const MyCheckbox = (props: FieldAttributes<MyCheckboxProps>) => {
  const { label, ...rest } = props

  const [field] = useField(rest)

  return <FormControlLabel {...field} control={<Checkbox />} label={label} />
}
