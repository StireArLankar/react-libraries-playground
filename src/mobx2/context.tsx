import React, { PropsWithChildren } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { createStore, TStore } from './store'

export const storeContext = React.createContext<TStore>(createStore())

export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const store = useLocalStore(createStore)

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export default StoreProvider
