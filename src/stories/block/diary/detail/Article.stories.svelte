<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Article from '$lib/components/block/diary/detail/Article.svelte'
  import profileImage from '../../../assets/images/profile-image.jpg'
  import diaryImage from '../../../assets/images/diary-image.jpg'
</script>

<Meta title="Components/Block/Diary/Detail/Article" component={Article} />

<div>
  <Template let:args>
    <Article {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    name: 'ムート',
    icon: profileImage,
    date: '2021-10-25T12:00:00+09:00',
    title: '毎週火曜にYoutube三人称チャンネルのメンバー限定公開収録放送中!!!',
    thumbnail: diaryImage,
    contents:
      'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  }}
/>

<style lang="scss">
  div {
    width: 360px;
  }
</style>
