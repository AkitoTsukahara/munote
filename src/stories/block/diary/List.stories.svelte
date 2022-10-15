<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import List from '$lib/components/block/diary/List.svelte'
  import profileImage from '../../assets/images/profile-image.jpg'
</script>

<Meta title="Components/Block/Diary/List" component={List} />

<div>
  <Template let:args>
    <List {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    name: 'ムート',
    icon: profileImage,
    date: '2021-10-25T12:00:00+09:00',
    title: '毎週火曜にYoutube三人称チャンネルのメンバー限定公開収録放送中!!!'
  }}
/>

<style lang="scss">
  div {
    width: 360px;
  }
</style>
