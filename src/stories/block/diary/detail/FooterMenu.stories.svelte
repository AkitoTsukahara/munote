<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import FooterMenu from '$lib/components/block/diary/detail/FooterMenu.svelte'
</script>

<Meta title="Components/Block/Diary/Detail/FooterMenu" component={FooterMenu} />

<div>
  <Template let:args>
    <FooterMenu {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    id: 'recZyqtDllgSky0v8'
  }}
/>

<style lang="scss">
  div {
    width: 360px;
  }
</style>
