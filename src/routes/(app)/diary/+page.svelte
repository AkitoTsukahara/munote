<script lang="ts">
  import { useDiary } from '$lib/stores/diary/store'
  import type { GetOutput } from './+page.server'
  import List from '$lib/components/block/diary/List.svelte'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiary()
  $: setFromApi(data.diaries)

  $: diaries = $diaryStore
</script>

<div>
  {#if diaries.length > 0}
    {#each diaries as diary}
      <div class="list">
        <List
          name={diary.name}
          title={diary.title}
          icon={diary.profileImage.url}
          date={diary.createdAt}
        />
      </div>
    {/each}
  {/if}
</div>

<style lang="scss">
  .list {
    margin-bottom: 16px;
  }
</style>
