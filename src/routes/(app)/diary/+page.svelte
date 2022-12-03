<script lang="ts">
  import { useDiary } from '$lib/stores/diary/store'
  import type { GetOutput } from './+page.server'
  import List from '$lib/components/block/diary/List.svelte'
  import { getDiaryUrl } from '$lib/modules/common/pathList.js'
  import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiary()
  $: setFromApi(data.diaries)

  $: diaries = $diaryStore
</script>

<div class="page">
  <div class="container">
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

    .list {
      margin-bottom: 16px;

      a {
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>
