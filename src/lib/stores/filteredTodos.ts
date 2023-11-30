import { TODO_FILTERS } from '$lib/constants'
import { derived } from 'svelte/store'
import { todos } from '$lib/stores/todos'
import { filter } from '$lib/stores/filters'

export const filteredTodos = derived([todos, filter], ([$todos, $filter]) => {
  switch ($filter) {
    case TODO_FILTERS.ALL:
      return $todos
    case TODO_FILTERS.DONE:
      return $todos.filter((todo) => todo.done)
    case TODO_FILTERS.PENDING:
      return $todos.filter((todo) => !todo.done)
    default:
      return $todos
  }
})
