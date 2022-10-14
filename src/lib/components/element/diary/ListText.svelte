<script lang="ts">
  export let text: string
</script>

<div class="list-text">
  {text}
</div>

<style lang="scss">
  .list-text {
    font-size: 16px;
    color: $headline;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
