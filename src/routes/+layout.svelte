<script>
  let { children } = $props();
</script>

<div class="app">
  {@render children()}
</div>

<style>
  .app {
    min-height: 100vh;
    background: #0b0b0b;
    color: white;
    font-family: system-ui, -apple-system, sans-serif;
  }
</style>