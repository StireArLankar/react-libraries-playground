import page from 'page'
import { Todo } from './state'

export const storage = {
  saveTodos: (todos: Record<string, Todo>) => localStorage.setItem('todos', JSON.stringify(todos)),

  getTodos: (): Record<string, Todo> => JSON.parse(localStorage.getItem('todos') || '{}'),
}

export const router = {
  initialize: (routes: { [url: string]: (params: object) => void }) => {
    Object.keys(routes).forEach((url) => page(url, ({ params }) => routes[url](params)))

    page.start()
  },

  goTo: (url: string) => page.show(url),
}

export const ids = {
  create: (): string => Date.now().toString(),
}

export default {
  storage,
  router,
  ids,
}
