import React, { useRef, useEffect } from 'react'
import { useStores } from './context'

import { useObserver } from 'mobx-react'

function useCounterStore() {
  const { counterStore } = useStores()

  return useObserver(() => ({
    count: counterStore.count,
    increment: counterStore.increment,
    decrement: counterStore.decrement,
  }))
}

export const Counter2 = () => {
  const { count, increment, decrement } = useCounterStore()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>Counter2: {count}</div>
      <button onClick={() => increment()}>++</button>
      <button onClick={() => decrement()}>--</button>
      <div>Component renders: {ref.current}</div>
    </div>
  )
}

export const Counter2View = () => {
  const { count } = useCounterStore()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>View2: {count}</div>
      <div>Component renders: {ref.current}</div>
    </div>
  )
}

function useCounterStoreControl() {
  const { counterStore } = useStores()

  return useObserver(() => ({
    increment: counterStore.increment,
    decrement: counterStore.decrement,
  }))
}

export const Control2 = () => {
  const { increment } = useCounterStoreControl()

  const ref = useRef(0)

  useEffect(() => void ref.current++)

  return (
    <div>
      <div>Control2</div>
      <div>Component renders: {ref.current}</div>
      <button onClick={() => increment()}>++</button>
    </div>
  )
}
