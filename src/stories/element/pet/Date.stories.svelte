<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Date from '$lib/components/element/pet/Date.svelte'
</script>

<Meta title="Components/Element/Pet/Date" component={Date} />

<div>
  <Template let:args>
    <Date {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    title: '誕生日',
    date: '2021-10-25T12:00:00+09:00'
  }}
/>
