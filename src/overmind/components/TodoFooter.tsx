import React, { memo } from 'react'
import clsx from 'clsx'
import { useApp } from '../overmind'
import { pluralize } from '../utils'
import { Filter } from '../overmind/state'

export const TodoFooter = memo(() => {
  const { state, actions } = useApp()

  const { activeTodoCount, filter, hasCompletedTodos } = state

  console.log('TodoFooter')

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeTodoCount}</strong> {pluralize(activeTodoCount, 'item')} left
      </span>

      <ul className='filters'>
        <li>
          <a href='/' className={clsx({ selected: filter === Filter.ALL })}>
            All
          </a>
        </li>
        <li>
          <a href='/active' className={clsx({ selected: filter === Filter.ACTIVE })}>
            Active
          </a>
        </li>
        <li>
          <a href='/completed' className={clsx({ selected: filter === Filter.COMPLETED })}>
            Completed
          </a>
        </li>
      </ul>

      {hasCompletedTodos ? (
        <button className='clear-completed' onClick={() => actions.clearCompleted()}>
          Clear completed
        </button>
      ) : null}
    </footer>
  )
})
