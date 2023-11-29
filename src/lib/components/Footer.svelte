<script lang="ts">
  import { TODO_FILTERS } from '$lib/constants'
  import { setFilter } from '$lib/stores/filters'
</script>

<footer>
  {#each Object.entries(TODO_FILTERS) as [key, value]}
    <button on:click={() => setFilter({ filterValue: value })}>{key}</button>
  {/each}
</footer>

<style>
  footer {
    @apply flex justify-center items-center gap-4;
  }
</style>
