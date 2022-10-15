<script lang="ts">
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
  }
  .app {
    background: $headline;
  }
  main {
    background: $tertiary;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 100%;
    margin: 0 auto;
  }
</style>
