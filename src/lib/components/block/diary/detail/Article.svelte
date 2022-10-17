<script lang="ts">
  export let icon: string
  export let name: string
  export let title: string
  export let thumbnail: string
  export let contents: string
</script>

<div class="article">
  <div class="pet">
    <div class="icon">
      <img src={icon} alt={name} />
    </div>
    <span>{name}</span>
  </div>
  <h1>{title}</h1>
  <div class="thumbnail">
    <img src={thumbnail} alt={title} />
  </div>
  <div class="contents">
    <p>{contents}</p>
  </div>
</div>

<style lang="scss">
  .article {
    background: $card-background;
    padding: 24px 16px;
    border-radius: 5px;

    .pet {
      display: flex;
      gap: 8px;
      color: $highlight;
      margin-bottom: 16px;

      .icon {
        width: 24px;
        height: 24px;
        border: 2px solid $highlight;
        box-sizing: border-box;
        border-radius: 50%;

        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    .thumbnail {
      margin-bottom: 16px;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .contents {
      font-size: 18px;
      line-height: 20px;
    }
  }
</style>
