import type { TodoList, TodoUpdate, TodoInput, TodoId } from '$lib/types.d'
import { get, writable } from 'svelte/store'

const initialTodos: TodoList = [
  {
    id: 1,
    title: 'Do the dishes',
    description: 'Wash the dishes in the sink',
    done: false
  },
  {
    id: 2,
    title: 'Walk the dog',
    description: 'Take the dog for a walk around the block',
    done: true
  },
  {
    id: 3,
    title: 'Buy groceries',
    description: 'Buy milk, bread, and eggs',
    done: true
  },
  {
    id: 4,
    title: 'Do laundry',
    description: 'Wash, dry, and fold the laundry',
    done: false
  },
  {
    id: 5,
    title: 'Clean the bathroom',
    description: 'Scrub the toilet, sink, and shower',
    done: false
  }
]

export const todos = writable<TodoList>(initialTodos, () => {
  // This function is called when the store is created.

  // Return a function that will be called when the store is destroyed.
  return () => {
    console.log('Todos store is destroyed')
  }
})

export const addTodo = ({ title, description }: TodoInput) => {
  const newTodo = {
    id: get(todos).length + 1,
    title,
    description,
    done: false
  }

  todos.update((prevTodos) => [newTodo, ...prevTodos])
}

export const updateTodo = ({ id, input }: { id: TodoId; input: TodoUpdate }) => {
  // todos.update((prevTodos) => [
  //   ...prevTodos.map((todo) => (todo.id === id ? { ...todo, ...input } : todo))
  // ])

  todos.update((prevTodos) => {
    const todoIndex = prevTodos.findIndex((todo) => todo.id === id)

    if (todoIndex === -1) {
      return prevTodos
    }

    const newTodo = {
      ...prevTodos[todoIndex],
      ...input
    }

    return [...prevTodos.slice(0, todoIndex), newTodo, ...prevTodos.slice(todoIndex + 1)]
  })
}

export const toggleTodo = ({ id }: { id: TodoId }) => {
  todos.update((prevTodos) => {
    const newTodos = prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }

      return todo
    })

    return newTodos
  })
}

export const removeTodo = ({ id }: { id: TodoId }) => {
  todos.update((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
}

export const clearTodos = () => {
  todos.set([])
}
