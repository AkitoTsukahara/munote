<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import HeaderMenu from '$lib/components/block/diary/detail/HeaderMenu.svelte'
</script>

<Meta title="Components/Block/Diary/Detail/HeaderMenu" component={HeaderMenu} />

<div>
  <Template let:args>
    <HeaderMenu {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    id: 'recZyqtDllgSky0v8',
    date: '2021-10-25T12:00:00+09:00'
  }}
/>

<style lang="scss">
  div {
    width: 360px;
  }
</style>
