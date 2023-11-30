<script lang="ts">
  import { TODO_FILTERS } from '$lib/constants'
  import { setFilter, filter } from '$lib/stores/filters'
</script>

<footer>
  <div class="join">
    {#each Object.entries(TODO_FILTERS) as [key, value]}
      <button
        class="btn join-item w-20"
        class:btn-active={$filter === value}
        on:click={() => setFilter({ filterValue: value })}
      >
        {key}
      </button>
    {/each}
  </div>
</footer>
