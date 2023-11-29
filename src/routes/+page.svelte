<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import TodoList from '$lib/components/TodoList.svelte'
  import { filteredTodos } from '$lib/stores/filteredTodos'
  import { addTodo } from '$lib/stores/todos'

  let title = ''
  let description = ''

  function handleSubmit() {
    if (title.length === 0 && description.length === 0) return

    addTodo({ title, description })
  }
</script>

<header>
  <h1>Todo list</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={title} type="text" placeholder="Title" />
    <input bind:value={description} type="text" placeholder="Description" />
    <button type="submit">Add todo</button>
  </form>
</header>
<TodoList todos={$filteredTodos} />
<footer>
  <Footer />
</footer>
