<script lang="ts">
  import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'
</script>

<div class="page">
  <div class="container">
    <h1>Hello</h1>
  </div>
  <CommonFooter />
</div>

<style lang="scss">
  .page {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
  }
  .container {
    flex-grow: 1;
    padding: 0 16px;
  }
</style>
