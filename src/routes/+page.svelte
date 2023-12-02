<script lang="ts">
  import AddTodoButton from '$lib/components/AddTodoButton.svelte'
  import TodoList from '$lib/components/TodoList.svelte'
  import TodoFooter from '$lib/components/TodoFooter.svelte'
  import { filteredTodos } from '$lib/stores/filteredTodos'
</script>

<header class="text-center">
  <h1 class="text-3xl font-extrabold md:text-5xl lg:text-6xl">
    <span
      class="text-transparent bg-clip-text bg-gradient-to-br to-pink-400 from-violet-500 stroke-2 stroke-black"
      >To Do List</span
    >
  </h1>
</header>
<AddTodoButton />
<div class="divider"></div>
<TodoList todos={$filteredTodos} />
<div class="divider"></div>
<TodoFooter />

<style>
  @keyframes lights {
    0% {
      color: hsl(230, 40%, 80%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 100%, 95%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 40%, 80%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }

  h1 {
    margin: auto;
    font-weight: 300;
    animation: lights 5s 750ms linear infinite;
  }
</style>
