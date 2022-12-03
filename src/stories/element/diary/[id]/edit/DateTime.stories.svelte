<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import DateTime from '$lib/components/element/diary/[id]/edit/DateTime.svelte'
</script>

<Meta title="Components/Element/Diary/[ID]/Edit/DateTime" component={DateTime} />

<div>
  <Template let:args>
    <DateTime {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    created_at: '2021-10-25T12:00:00+09:00'
  }}
/>

<style lang="scss">
  div {
    width: 400px;
    height: 360px;
  }
</style>
