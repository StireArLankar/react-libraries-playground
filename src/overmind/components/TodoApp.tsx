import React from 'react'
import { useApp } from '../overmind'

import { TodoItem } from './TodoItem'
import { TodoFooter } from './TodoFooter'
import { TodoHeader } from './TodoHeader'

export const TodoApp = () => {
  const { state, actions } = useApp()

  console.log(state.currentTodos)

  return (
    <div className='todoapp'>
      <TodoHeader />

      <section className='main'>
        <input
          id='toggle-all'
          className='toggle-all'
          type='checkbox'
          onChange={() => actions.toggleAllTodos()}
          checked={state.isAllTodosChecked}
        />

        <label htmlFor='toggle-all'>Mark all as complete</label>

        <ul className='todo-list'>
          {state.currentTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} isEditing={state.editingTodoId === todo.id} />
          ))}
        </ul>
      </section>

      <TodoFooter />
    </div>
  )
}

export default TodoApp
