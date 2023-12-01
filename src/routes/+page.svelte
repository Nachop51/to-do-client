<script lang="ts">
  import TodoInput from '$lib/components/TodoInput.svelte'
  import TodoList from '$lib/components/TodoList.svelte'
  import TodoFooter from '$lib/components/TodoFooter.svelte'
  import { filteredTodos } from '$lib/stores/filteredTodos'
</script>

<header class="text-center">
  <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    <span
      class="text-transparent bg-clip-text bg-gradient-to-br to-pink-400 from-violet-500 stroke-2 stroke-black"
      >To Do List</span
    >
  </h1>
</header>
<div class="divider"></div>
<TodoInput />
<div class="divider"></div>
<TodoList todos={$filteredTodos} />
<div class="divider"></div>
<TodoFooter />
