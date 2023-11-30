<script lang="ts">
  import TodoHeader from '$lib/components/TodoHeader.svelte'
  import TodoList from '$lib/components/TodoList.svelte'
  import TodoFooter from '$lib/components/TodoFooter.svelte'
  import { filteredTodos } from '$lib/stores/filteredTodos'
</script>

<TodoHeader />
<div class="divider"></div>
<TodoList todos={$filteredTodos} />
<div class="divider"></div>
<TodoFooter />
