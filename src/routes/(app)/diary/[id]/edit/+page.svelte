<script lang="ts">
  import type { GetOutput } from './+page.server'
  import { useDiaryDetail } from '$lib/stores/diary/detail/store'
  import FooterMenu from '$lib/components/block/diary/detail/FooterMenu.svelte'
  import DateTime from '$lib/components/element/diary/[id]/edit/DateTime.svelte'
  import TextInput from '$lib/components/element/diary/[id]/edit/TextInput.svelte'
  import TextArea from '$lib/components/element/diary/[id]/edit/TextArea.svelte'
  import { createForm } from 'felte'
  import { validator } from '@felte/validator-yup'
  import * as yup from 'yup'
  import { useDiaryEditStoreApi } from '$lib/stores/diary/detail/edit/api'

  export let data: GetOutput
  const { diaryStore, setFromApi } = useDiaryDetail()
  $: setFromApi(data.diary)
  $: diary = $diaryStore

  const schema = yup.object({
    created_at: yup
      .string()
      .required('作成日は必須項目です'),
    title: yup
      .string()
      .required('タイトルは必須項目です'),
    contents: yup
      .string()
      .required('内容は必須項目です')
  })

  let submitDisable = false
  const { form, errors, isSubmitting, isValid, handleSubmit } = createForm<
    yup.InferType<typeof schema>
    >({
    extend: validator({ schema }),
    onSubmit: async (values) => {
      submitDisable = true
      await useDiaryEditStoreApi().postEditDiary(
        {
          id: diary.id,
          created_at: values.created_at,
          title: values.title,
          contents: values.contents
        }
      )
      location.href = '/diary'
      submitDisable = false
    },
    onError: (err) => {
      console.log(err)
    }
  })

  const checkValidate = (submited: boolean) => {
    if (submited && $isValid === false) {
      alert('有効でない項目があります')
    }
  }

  $: checkValidate($isSubmitting)
</script>

<div class="page">
  {#if diary}
    <form class="container" use:form>
      <DateTime value={diary.createdAt} name="created_at"/>
      <TextInput value={diary.title} name="title"/>
      <TextArea value={diary.contents} name="contents"/>
      <button type="submit" on:register={handleSubmit}>Update!</button>
    </form>
  {/if}
  <FooterMenu />
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
