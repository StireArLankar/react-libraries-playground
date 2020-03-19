import { Provider } from 'overmind-react'
import * as React from 'react'
import { overmind } from './overmind'
import TodoApp from './components/TodoApp'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

export default () => (
  <Provider value={overmind}>
    <TodoApp />
  </Provider>
)
