import React, { PropsWithChildren, useMemo } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { createStore, TStore } from './store'
import { createPetStore, TPetStore } from './PetStore'

export const storeContext = React.createContext<{ store: TStore; petStore: TPetStore }>({
  store: createStore(),
  petStore: createPetStore(),
})

export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const store = useLocalStore(createStore)
  const petStore = useLocalStore(createPetStore)

  const value = useMemo(
    () => ({
      store,
      petStore,
    }),
    [petStore, store]
  )

  return <storeContext.Provider value={value}>{children}</storeContext.Provider>
}

export default StoreProvider
