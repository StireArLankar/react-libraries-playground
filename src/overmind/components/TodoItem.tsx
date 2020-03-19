import React from 'react'
import clsx from 'clsx'
import { useApp } from '../overmind'
import { Todo } from '../overmind/state'

export interface TodoItemProps {
  todo: Todo
  isEditing: boolean
}

export const TodoItem = ({ todo, isEditing }: TodoItemProps) => {
  const { state, actions } = useApp()

  return (
    <li
      className={clsx({
        completed: todo.completed,
        editing: state.editingTodoId,
      })}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.completed}
          onChange={() => actions.toggleTodo(todo.id)}
        />
        <label onDoubleClick={() => actions.editTodo(todo.id)}>{todo.title}</label>
        <button className='destroy' onClick={() => actions.removeTodo(todo.id)} />
      </div>

      {isEditing ? (
        <input
          className='edit'
          value={state.editingTodoTitle}
          onBlur={() => actions.saveEditingTodoTitle()}
          onChange={(event) => actions.changeEditingTodoTitle(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.keyCode === 27) {
              actions.cancelEditingTodo()
            } else if (event.keyCode === 13) {
              actions.saveEditingTodoTitle()
            }
          }}
        />
      ) : null}
    </li>
  )
}
