<script lang="ts">
  import { useDiary } from '$lib/stores/diary/store'
  import type { GetOutput } from './+page.server'
  import Article from '$lib/components/block/diary/detail/Article.svelte'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiary()
  $: setFromApi(data.diary)

  $: diary = $diaryStore
</script>

<div>
  {#if diary}
    <Article
      name={diary.name}
      title={diary.title}
      icon={diary.profileImage.url}
      date={diary.createdAt}
      thumbnail={diary.thumbnail.url}
      contents={diary.contents}
    />
  {/if}
</div>
