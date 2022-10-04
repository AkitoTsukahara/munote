<div class="layout">
  <div class="header">

  </div>

  <div class="container">
    <slot />
  </div>
  <div class="footer">

  </div>
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
