<script lang="ts">
  import type { GetOutput } from './+page.server'
  import Article from '$lib/components/block/diary/detail/Article.svelte'
  import { useDiaryDetail } from '$lib/stores/diary/detail/store'
  import HeaderMenu from '$lib/components/block/diary/detail/HeaderMenu.svelte'
  import FooterMenu from '$lib/components/block/diary/detail/FooterMenu.svelte'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiaryDetail()
  $: setFromApi(data.diary)

  $: diary = $diaryStore
</script>

<div class="page">
  {#if diary}
    <HeaderMenu id={diary.id} date={diary.createdAt} />
    <div class="container">
      <Article
        name={diary.name}
        title={diary.title}
        icon={diary.profileImage.url}
        thumbnail={diary.thumbnail.url}
        contents={diary.contents}
      />
    </div>
    <FooterMenu id={diary.id} />
  {/if}
</div>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .container {
    margin-top: 40px;
    flex-grow: 1;
    padding: 0 16px;
  }
</style>
