<script lang="ts">
  export let icon: string
  export let name: string
</script>

<div class="list-pet">
  <div class="icon">
    <img src={icon} alt={name} />
  </div>
  <p>{name}</p>
</div>

<style lang="scss">
  .list-pet {
    display: flex;
    gap: 8px;
    align-items: center;

    .icon {
      border: 2px solid $highlight;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 50%;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }

    p {
      font-size: 14px;
      line-height: 16px;
      color: $highlight;
    }
  }
</style>
