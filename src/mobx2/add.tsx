import React, { useState } from 'react'
import { useRootData } from './hook'

export const Add = () => {
  const { pushCity } = useRootData((store) => ({
    pushCity: store.pushCity,
  }))

  const [value, setValue] = useState('')

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => setValue(evt.target.value)

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    pushCity(value)
    setValue('')
  }

  // console.count('add')

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button>Submit</button>
    </form>
  )
}
