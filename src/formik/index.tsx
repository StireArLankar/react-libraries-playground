import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import {
  TextField,
  Button,
  CssBaseline,
  Checkbox,
  Radio,
  Select,
  MenuItem,
} from '@material-ui/core'
import * as yup from 'yup'

import useStyles from './styles'
import { MyRadio } from './MyRadio'
import { MyTextField } from './MyTextField'

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .max(10),
  pets: yup.array().of(
    yup.object({
      name: yup
        .string()
        .typeError('pet name is required')
        .required(),
    })
  ),
})

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <Formik
        initialValues={{
          firstName: '',
          isTall: false,
          cookies: [],
          yogurt: 'apple',
          pets: [{ type: 'cat', name: 'jarvis', id: '' + Math.random() }],
        }}
        onSubmit={(data, props) => {
          props.setSubmitting(true)
          console.log(data)
          setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
          }, 2000)
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors: Record<string, string> = {}

        //   if (values.firstName.includes('bob')) {
        //     errors.firstName = 'no bob'
        //   }

        //   return errors
        // }}
      >
        {({ values, isSubmitting, errors, handleChange, handleBlur }) => (
          <Form className={classes.form}>
            <Field name='firstName' type='input' placeholder='firstName' as={TextField} />

            <TextField
              name='firstName'
              placeholder='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Field name='isTall' type='checkbox' as={Checkbox} />

            <div>
              <Field name='cookies' value='1' type='checkbox' as={Checkbox} />
              <Field name='cookies' value='2' type='checkbox' as={Checkbox} />
              <Field name='cookies' value='3' type='checkbox' as={Checkbox} />
            </div>

            <div>
              <Field name='yogurt' value='apple' type='radio' as={Radio} />
              <Field name='yogurt' value='peach' type='radio' as={Radio} />
              <Field name='yogurt' value='orange' type='radio' as={Radio} />
            </div>

            <div>
              <MyRadio label='apple' type='radio' name='yogurt' value='apple' />
              <MyRadio label='peach' type='radio' name='yogurt' value='peach' />
              <MyRadio label='orange' type='radio' name='yogurt' value='orange' />
            </div>

            <MyTextField name='firstName' placeholder='firstName' />

            <FieldArray name='pets'>
              {({ remove, push }) => (
                <div>
                  {values.pets.map((pet, index) => (
                    <div key={pet.id}>
                      <MyTextField placeholder='pet name' name={`pets[${index}].name`} />
                      <Field type='select' name={`pets[${index}].type`} as={Select}>
                        <MenuItem value='cat'>cat</MenuItem>
                        <MenuItem value='dog'>dog</MenuItem>
                        <MenuItem value='frog'>frog</MenuItem>
                      </Field>
                      <Button
                        type='button'
                        variant='contained'
                        color='primary'
                        onClick={() => remove(index)}
                      >
                        x
                      </Button>
                    </div>
                  ))}

                  <Button
                    type='button'
                    variant='contained'
                    color='primary'
                    onClick={() => push({ id: '' + Math.random(), type: 'frog', name: '' })}
                  >
                    Add pet
                  </Button>
                </div>
              )}
            </FieldArray>

            <div style={{ marginTop: 10 }}>
              <Button variant='contained' color='primary' disabled={isSubmitting} type='submit'>
                Submit
              </Button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}
