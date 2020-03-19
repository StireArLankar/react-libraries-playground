import React, { memo } from 'react'
import { useApp } from '../overmind'

export const TodoHeader = memo(() => {
  const { state, actions } = useApp()

  console.log('TodoHeader')

  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={state.newTodoTitle}
        onChange={(event) => actions.changeNewTodoTitle(event.currentTarget.value)}
        onKeyDown={(event) => {
          if (event.keyCode !== 13) return
          actions.addTodo()
        }}
      />
    </header>
  )
})
