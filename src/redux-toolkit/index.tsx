import React from 'react'
import { store, AppDispatch } from './redux'
import { primarySelector, fetchFake, primaryLoadingSelector, fetchFake2 } from './redux/primary'
import { secondarySelector } from './redux/secondary'
import { Provider, useSelector, useDispatch } from 'react-redux'

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const val = useSelector(primarySelector)
  const secondary = useSelector(secondarySelector)
  const loading = useSelector(primaryLoadingSelector)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <button onClick={() => dispatch(fetchFake())}>Click</button>
      <button
        onClick={() => {
          dispatch(fetchFake2()).then(() => console.log('test'))
        }}
      >
        Click2
      </button>
      <p>{loading}</p>
      <p>Primary: {val}</p>
      <p>Secondary: {secondary}</p>
    </div>
  )
}
