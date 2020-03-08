import React from 'react'
import { TextField } from '@material-ui/core'
import { useField, FieldAttributes } from 'formik'

export interface MyTextFieldProps {
  placeholder: string
}

export const MyTextField = (props: FieldAttributes<MyTextFieldProps>) => {
  const { placeholder, ...rest } = props

  const [field, meta] = useField(rest)

  const errMessage = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField {...field} placeholder={placeholder} error={!!errMessage} helperText={errMessage} />
  )
}
