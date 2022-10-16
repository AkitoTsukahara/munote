<script lang="ts">
  import ListDate from '$lib/components/element/diary/ListDate.svelte'
  import ListPet from '$lib/components/element/diary/ListPet.svelte'
  import ListText from '$lib/components/element/diary/ListText.svelte'

  export let name: string
  export let icon: string
  export let date: string
  export let title: string
  export let thumbnail: string
</script>

<div class="list">
  <div class="date">
    <ListDate {date} />
  </div>
  <div class="text-content">
    <ListPet {icon} {name} />
    <ListText {title} />
  </div>
  {#if thumbnail}
    <div class="thumbnail">
      <img src={thumbnail} alt={title} />
    </div>
  {/if}
</div>

<style lang="scss">
  .list {
    background: $card-background;
    border-radius: 5px;
    padding: 16px 24px;
    display: flex;
    gap: 16px;

    .date {
      display: flex;
      align-items: center;
      flex-basis: 10%;
    }

    .text-content {
      display: grid;
      gap: 8px;
      flex-basis: 60%;
    }

    .thumbnail {
      width: 96px;
      height: 80px;
      align-items: center;
      display: grid;
      flex-basis: 30%;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
</style>
