<script lang="ts">
  import type { GetOutput } from './+page.server'
  import Article from '$lib/components/block/diary/detail/Article.svelte'
  import { useDiaryDetail } from '$lib/stores/diary/detail/store'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiaryDetail()
  $: setFromApi(data.diary)

  $: diary = $diaryStore
</script>

<div>
  {#if diary}
    <Article
      name={diary.name}
      title={diary.title}
      icon={diary.profileImage.url}
      thumbnail={diary.thumbnail.url}
      contents={diary.contents}
    />
  {/if}
</div>
