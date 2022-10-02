<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ElapsedDays from '$lib/components/element/pet/ElapsedDays.svelte'
</script>

<Meta title="Components/Element/Pet/ElapsedDays" component={ElapsedDays} />

<div>
  <Template let:args>
    <ElapsedDays {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    date: '2021-10-25T12:00:00+09:00'
  }}
/>
