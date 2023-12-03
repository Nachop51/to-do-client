<script lang="ts">
  import TodoItem from '$lib/components/TodoItem.svelte'
  import type { TodoList } from '$lib/types'
  import { filter } from '$lib/stores/filters'
  import { TODO_FILTERS } from '$lib/constants'

  export let todos: TodoList
</script>

<div class="text-3xl font-semibold text-center">
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
<ul class="grid grid-cols-2 items-start gap-4 justify-center">
  {#each todos as { id, title, description, done }}
    <TodoItem {id} {title} {description} {done} />
  {/each}
</ul>

<style>
  h2 {
    @apply text-xl;
  }
</style>
