<script lang="ts">
  export let icon: string
  export let name: string
</script>

<div class="list-pet">
  <div class="icon">
    <img src="{icon}" alt="{name}">
  </div>
  <p>{name}</p>
</div>

<style lang="scss">
  .list-pet {
    display: flex;

    .icon {
      border: 2px solid $highlight;
      border-radius: 50%;
      box-sizing: border-box;
      
      img {
        width: 16px;
        height: 16px;
      }
    }

    p {
      font-size: 14px;
      line-height: 16px;
      color: $highlight;
    }
  }
</style>
