<script lang="ts">
  export let title: string
</script>

<div class="list-text">
  {title}
</div>

<style lang="scss">
  .list-text {
    font-size: 16px;
    color: $headline;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
