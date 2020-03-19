import { Derive } from 'overmind'

export enum Filter {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export type Todo = {
  id: string
  title: string
  completed: boolean
}

type State = {
  filter: Filter
  newTodoTitle: string
  todos: Record<string, Todo>
  editingTodoId: string | null
  editingTodoTitle: string
  currentTodos: Derive<State, Todo[]>
  activeTodoCount: Derive<State, number>
  hasCompletedTodos: Derive<State, boolean>
  isAllTodosChecked: Derive<State, boolean>
}

export const state: State = {
  filter: Filter.ALL,
  newTodoTitle: '',
  todos: {},
  editingTodoId: null,
  editingTodoTitle: '',

  currentTodos: ({ todos, filter }) =>
    Object.values(todos).filter((todo) => {
      switch (filter) {
        case 'active':
          return !todo.completed
        case 'completed':
          return todo.completed
        default:
          return true
      }
    }),

  activeTodoCount: ({ todos }) => Object.values(todos).filter((todo) => !todo.completed).length,

  hasCompletedTodos: ({ todos }) => Object.values(todos).some((todo) => todo.completed),

  isAllTodosChecked: ({ currentTodos }) => currentTodos.every((todo) => todo.completed),
}
