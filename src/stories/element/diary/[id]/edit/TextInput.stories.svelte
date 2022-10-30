<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import TextInput from '$lib/components/element/diary/[id]/edit/TextInput.svelte'
</script>

<Meta title="Components/Element/Diary/[ID]/Edit/TextInput" component={TextInput} />

<div>
  <Template let:args>
    <TextInput {...args} />
  </Template>
</div>

<Story
    name="Default"
    args={{
    title: 'タイトルが入ります。'
  }}
/>

<style lang="scss">
  div {
    width: 400px;
    height: 360px;
  }
</style>
