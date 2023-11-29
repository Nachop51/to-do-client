<script lang="ts">
  import '../app.css'
</script>

<main>
  <slot />
</main>

<style>
  main {
    max-width: 1000px;
    @apply mx-auto h-full flex flex-col place-items-center;
  }
</style>
