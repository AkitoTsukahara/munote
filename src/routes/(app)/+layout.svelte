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
    width: 390px;
    height: 100%;
    margin: 0 auto;
    background: #272343;
  }
  .container {
    flex-grow: 1;
  }
</style>
