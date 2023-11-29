<script lang="ts">
  import { removeTodo, toggleTodo } from '$lib/stores/todos'
  import type { TodoId, TodoList } from '$lib/types'

  export let todos: TodoList

  function handleCheckbox({ id }: { id: TodoId }) {
    toggleTodo({ id })
  }

  function handleDelete({ id }: { id: TodoId }) {
    removeTodo({ id })
  }
</script>

<ul>
  {#each todos as { id, title, description, done }}
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <input type="checkbox" bind:checked={done} on:click={() => handleCheckbox({ id })} />
      <button on:click={() => handleDelete({ id })}>delete</button>
    </li>
  {/each}
</ul>
