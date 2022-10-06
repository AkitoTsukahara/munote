<div class="layout">
  <div class="header" />

  <div class="container">
    <slot />
  </div>
  <div class="footer" />
</div>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container {
    flex-grow: 1;
  }
</style>
