<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Anniversary from '$lib/components/block/pet/Anniversary.svelte'
</script>

<Meta title="Components/Block/Pet/Anniversary" component={Anniversary} />

<div>
  <Template let:args>
    <Anniversary {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    birthday: '2021-10-25T12:00:00+09:00',
    familyDay: '2022-01-15T12:00:00+09:00'
  }}
/>
