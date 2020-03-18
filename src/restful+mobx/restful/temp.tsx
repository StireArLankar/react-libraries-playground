import React, { useEffect } from 'react'
import { useGetPetById } from './requests'
import { usePetData } from '../mobx/hook'

export const Sibling = () => {
  const { error, loading, order } = usePetData((s) => ({
    ...s,
  }))

  console.log('Sibling')

  return (
    <div style={{ textAlign: 'left' }}>
      <pre>Error: {JSON.stringify(error, null, 2)}</pre>
      <pre>loading: {JSON.stringify(loading)}</pre>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  )
}

export const Temp = ({ petId }: { petId: number }) => {
  const { data: order, loading, error } = useGetPetById({ petId })

  const set = usePetData((s) => s.set)

  useEffect(() => {
    set({ order, loading, error })
  }, [order, loading, error, set])

  return null
}

export const NonRender = () => {
  const nothing = usePetData((s) => s.nothing)

  console.log('test')

  return <div onClick={nothing}>Nothing</div>
}
