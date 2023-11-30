<script lang="ts">
  import '../app.css'
</script>

<main>
  <slot />
</main>

<style>
  main {
    max-width: 1000px;
    @apply h-full w-full flex flex-col items-center gap-4 p-8;
  }
</style>
