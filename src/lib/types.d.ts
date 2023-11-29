import type { TODO_FILTERS } from './constants'

export type TodoId = number

export type Todo = {
  id: TodoId
  title: string
  description: string
  done: boolean
}

export type TodoList = Todo[]

export type TodoInput = Pick<Todo, 'title' | 'description'>
export type TodoUpdate = Partial<TodoInput>

export type TodoFilterValues = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
