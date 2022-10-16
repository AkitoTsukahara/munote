<script lang="ts">
  import { useDiary } from '$lib/stores/diary/store'
  import type { GetOutput } from './+page.server'
  import List from '$lib/components/block/diary/List.svelte'
  import { getDiaryUrl } from '$lib/modules/common/pathList.js'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiary()
  $: setFromApi(data.diaries)

  $: diaries = $diaryStore
</script>

<div>
  {#if diaries.length > 0}
    {#each diaries as diary}
      <div class="list">
        <a href={getDiaryUrl(diary.id)}>
          <List
            name={diary.name}
            title={diary.title}
            icon={diary.profileImage.url}
            date={diary.createdAt}
            thumbnail={diary.thumbnail.url}
          />
        </a>
      </div>
    {/each}
  {/if}
</div>

<style lang="scss">
  .list {
    margin-bottom: 16px;

    a {
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
