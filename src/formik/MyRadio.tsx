import React from 'react'
import { useField, FieldAttributes } from 'formik'
import { FormControlLabel, Radio } from '@material-ui/core'

export interface MyRadioProps {
  label: string
}

export const MyRadio = (props: FieldAttributes<MyRadioProps>) => {
  const { label, ...rest } = props

  const [field] = useField(rest)

  return <FormControlLabel {...field} control={<Radio />} label={label} />
}
