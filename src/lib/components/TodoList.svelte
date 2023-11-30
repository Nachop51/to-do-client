<script lang="ts">
  import { removeTodo, toggleTodo } from '$lib/stores/todos'
  import type { TodoId, TodoList } from '$lib/types'
  import { filter } from '$lib/stores/filters'
  import { TODO_FILTERS } from '$lib/constants'

  export let todos: TodoList

  function handleCheckbox({ id }: { id: TodoId }) {
    toggleTodo({ id })
  }

  function handleDelete({ id }: { id: TodoId }) {
    removeTodo({ id })
  }
</script>

<div class="text-2xl font-semibold text-center">
  {#if todos.length === 0 && $filter === TODO_FILTERS.ALL}
    <h2>You have no todos yet, add one!</h2>
  {:else if todos.length === 0 && $filter === TODO_FILTERS.DONE}
    <h2>You have no completed todos!</h2>
  {:else if todos.length === 0 && $filter === TODO_FILTERS.PENDING}
    <h2>No pending tasks!</h2>
  {:else}
    <h2>Showing {todos.length} todos</h2>
    {#if $filter === TODO_FILTERS.ALL}
      <div class="flex flex-row gap-4 text-sm font-normal text-primary">
        <span>Completed: {todos.filter((todo) => todo.done).length}</span>
        <span>Pending: {todos.filter((todo) => !todo.done).length}</span>
      </div>
    {/if}
  {/if}
</div>
<ul class="flex gap-4 flex-wrap">
  {#each todos as { id, title, description, done }}
    <li class="card w-96 bg-base-100 shadow-xl border-2 border-base-200">
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-outline" on:click={() => handleDelete({ id })}> Discard </button>
          <button class="btn flex items-center" on:click={() => handleCheckbox({ id })}>
            Complete
            <input class="checkbox checkbox-accent" type="checkbox" bind:checked={done} />
          </button>
        </div>
      </div>
    </li>
  {/each}
</ul>

<style>
  li {
    @apply flex flex-col gap-2;
  }

  h2 {
    @apply text-xl;
  }

  p {
    @apply text-gray-500;
  }
</style>
