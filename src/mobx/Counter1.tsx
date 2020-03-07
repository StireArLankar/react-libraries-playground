import React, { useRef, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from './context'

export const Counter1 = observer(() => {
  const { counterStore } = useStores()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>Counter1: {counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
      <div>Component renders: {ref.current}</div>
    </div>
  )
})

export const Counter1View = observer(() => {
  const { counterStore } = useStores()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>View: {counterStore.count}</div>
      <div>Component renders: {ref.current}</div>
    </div>
  )
})

export const Control1 = observer(() => {
  const { counterStore } = useStores()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>Control</div>
      <div>Component renders: {ref.current}</div>
      <button onClick={() => counterStore.increment()}>++</button>
    </div>
  )
})
