import { writable } from 'svelte/store'
import { TODO_FILTERS } from '$lib/constants'
import type { TodoFilterValues } from '$lib/types.d'

export const filter = writable<TodoFilterValues>(TODO_FILTERS.ALL)

export const setFilter = ({ filterValue }: { filterValue: TodoFilterValues }) => {
  filter.set(filterValue)
}
