<script lang="ts">
  import { addTodo /*, clearTodos */ } from '$lib/stores/todos'

  let title = ''
  let description = ''

  function handleSubmit() {
    if (title.length === 0 && description.length === 0) return

    addTodo({ title, description })
    title = ''
    description = ''
  }

  // function handleDelete() {
  //   clearTodos()
  // }
</script>

<form class="flex flex-row gap-2 items-center" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col gap-2">
    <input
      class="input input-bordered w-full max-w-xs input-accent"
      bind:value={title}
      type="text"
      placeholder="Title"
    />
    <textarea
      class="textarea textarea-bordered textarea-accent w-full max-w-xs"
      bind:value={description}
      placeholder="Description"
    ></textarea>
  </div>
  <button class="btn" type="submit">Add todo</button>
</form>
<!-- <button class="btn btn-error" on:click={handleDelete}>Delete all</button> -->
