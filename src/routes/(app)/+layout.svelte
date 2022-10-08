<script>
  import CommonFooter from "$lib/components/page/common/CommonFooter.svelte"

</script>
<div class="layout">
  <div class="header"/>
  <div class="container">
    <slot />
  </div>
  <footer>
    <CommonFooter/>
  </footer>
</div>

<style lang="scss">
  .layout {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
  }
  .container {
    flex-grow: 1;
    padding: 0 16px;
  }
  footer {
    margin-top: auto;
  }
</style>
