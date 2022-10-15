<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ListDate from '$lib/components/element/diary/ListDate.svelte'
</script>

<Meta title="Components/Element/Diary/ListDate" component={ListDate} />

<div>
  <Template let:args>
    <ListDate {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    date: '2021-10-25T12:00:00+09:00'
  }}
/>
