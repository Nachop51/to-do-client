<script lang="ts">
  import { removeTodo, toggleTodo } from '$lib/stores/todos'
  import type { TodoId } from '$lib/types'

  export let id: TodoId
  export let title: string
  export let description: string
  export let done: boolean

  function handleCheckbox({ id }: { id: TodoId }) {
    toggleTodo({ id })
  }

  function handleDelete({ id }: { id: TodoId }) {
    removeTodo({ id })
  }
</script>

<li class="card w-96 bg-base-100 shadow-xl border-2 border-base-200 flex flex-col gap-2">
  <div class="card-body">
    <h3 class="card-title">{title}</h3>
    <p class="text-gray-500">{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-error btn-outline" on:click={() => handleDelete({ id })}>
        Discard
      </button>
      <button class="btn flex items-center" on:click={() => handleCheckbox({ id })}>
        Complete
        <input class="checkbox checkbox-accent" type="checkbox" bind:checked={done} />
      </button>
    </div>
  </div>
</li>
