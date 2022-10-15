<script lang="ts">
import ListDate from '$lib/components/element/diary/ListDate.svelte'
import ListPet from '$lib/components/element/diary/ListPet.svelte'
import ListText from '$lib/components/element/diary/ListText.svelte'

export let name: string
export let icon: string
export let date: string
export let title: string
</script>

<div class="list">
  <div class="date">
    <ListDate {date}/>
  </div>
  <div class="text-content">
    <ListPet {icon} {name}/>
    <ListText {title}/>
  </div>
</div>

<style lang="scss">
  .list {
    background: $secondary;
    border-radius: 5px;
    padding: 16px 24px;
    display: flex;
    gap: 24px;

    .date {
      display: flex;
      align-items: center;
    }

    .text-content {
      display: grid;
      gap: 8px;
    }
  }
</style>
