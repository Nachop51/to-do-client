<script lang="ts">
  import { addTodo } from '$lib/stores/todos'

  let title = ''
  let description = ''

  function handleSubmit() {
    if (title.length === 0 && description.length === 0) return

    addTodo({ title, description })
    title = ''
    description = ''
  }
</script>

<header class="text-center">
  <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span
      class="text-transparent bg-clip-text bg-gradient-to-br to-pink-400 from-violet-500 stroke-2 stroke-black"
      >To Do List</span
    >
  </h1>
  <form class="flex flex-col gap-2 items-center" on:submit|preventDefault={handleSubmit}>
    <input
      class="input input-bordered w-full max-w-xs"
      bind:value={title}
      type="text"
      placeholder="Title"
    />
    <input
      class="input input-bordered w-full max-w-xs"
      bind:value={description}
      type="text"
      placeholder="Description"
    />
    <button class="btn mt-2" type="submit">Add todo</button>
  </form>
</header>
