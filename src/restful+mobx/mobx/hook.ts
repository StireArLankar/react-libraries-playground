import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { storeContext } from './context'
import { TStore } from './store'
import { TPetStore } from './PetStore'

export const useStoreData = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = React.useContext(context)

  if (!value) {
    throw new Error()
  }

  const store = storeSelector(value)

  return useObserver(() => {
    return dataSelector(store)
  })
}

export const useRootData = <Selection>(dataSelector: (store: TStore) => Selection) =>
  useStoreData(storeContext, (contextData) => contextData.store, dataSelector)

export const usePetData = <S>(selector: (store: TPetStore) => S) =>
  useStoreData(storeContext, (ctx) => ctx.petStore, selector)
