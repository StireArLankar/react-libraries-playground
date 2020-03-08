import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import { Button, CssBaseline, Select, MenuItem, Checkbox } from '@material-ui/core'

import useStyles from './styles'
import { MyCheckbox } from './MyCheckbox'
import { MyTextField } from './MyTextField'

interface TextFieldModel {
  name: string
  type: 'input'
  value: string
}

interface CheckboxModel {
  name: string
  type: 'checkbox'
  value: boolean
}

const fieldsSchema: Record<string, TextFieldModel | CheckboxModel> = {
  test: {
    name: 'test',
    type: 'input',
    value: '',
  },
  test2: {
    name: 'test2',
    type: 'input',
    value: 'default value',
  },
  test3: {
    name: 'test3',
    type: 'checkbox',
    value: false,
  },
}

const fieldsSchema2: Record<string, TextFieldModel | CheckboxModel> = {
  test3: {
    name: 'test3',
    type: 'checkbox',
    value: false,
  },
}

const fieldMapper = ({ type, name }: { type: 'input' | 'checkbox'; name: string }) => {
  switch (type) {
    case 'input': {
      return <MyTextField name={name} placeholder='placeholder' />
    }
    case 'checkbox': {
      return <MyCheckbox name={name} label='label' />
    }
  }
}

export default () => {
  const classes = useStyles()

  const [isChecked, setIsChecked] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <div className={classes.wrapper}>
      <div>
        <Button variant='contained' onClick={() => setCount((prev) => prev + 1)}>
          Click me to break {count}
        </Button>
        <Checkbox value={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
      </div>
      <CssBaseline />
      <Formik
        enableReinitialize
        initialValues={{
          fields: Object.keys(isChecked ? fieldsSchema : fieldsSchema2),
          selectedFields: isChecked ? [fieldsSchema.test] : [],
        }}
        onSubmit={(data, props) => {
          props.setSubmitting(true)
          console.log(data)
          setTimeout(() => {
            props.setSubmitting(false)
          }, 2000)
        }}
      >
        {({ values: { fields, selectedFields }, isSubmitting, errors }) => (
          <Form className={classes.form}>
            <FieldArray name='selectedFields'>
              {({ remove, push }) => (
                <>
                  <div>
                    {fields.length === selectedFields.length ? (
                      <div>Every field is selected!</div>
                    ) : (
                      <Select
                        value=''
                        // onChange={(evt) => {
                        //   const { value }: { value: string } = evt.target as any
                        //   const index = selectedFields.findIndex((item) => item.name === value)
                        //   if (index > -1) {
                        //     remove(index)
                        //   } else {
                        //     push(fieldsSchema[value])
                        //   }
                        // }}
                        onChange={(evt) => {
                          const { value }: { value: string } = evt.target as any
                          push(fieldsSchema[value])
                        }}
                      >
                        {fields
                          .filter(
                            (field) => selectedFields.findIndex((item) => item.name === field) < 0
                          )
                          .map((field) => (
                            <MenuItem key={field} value={field}>
                              {field}
                            </MenuItem>
                          ))}
                      </Select>
                    )}
                  </div>
                  <div>
                    {selectedFields.map((field, index) => (
                      <div key={field.name}>
                        {fieldMapper({ ...field, name: `selectedFields[${index}].value` })}
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
                  </div>
                </>
              )}
            </FieldArray>

            <div style={{ marginTop: 10 }}>
              <Button variant='contained' color='primary' disabled={isSubmitting} type='submit'>
                Submit
              </Button>
            </div>

            <pre>{JSON.stringify({ fields, selectedFields }, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}
