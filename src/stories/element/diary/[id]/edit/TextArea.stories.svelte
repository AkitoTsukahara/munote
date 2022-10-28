<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import TextArea from '$lib/components/element/diary/[id]/edit/TextArea.svelte'
</script>

<Meta title="Components/Element/Diary/[ID]/Edit/TextArea" component={TextArea} />

<div>
  <Template let:args>
    <TextArea {...args} />
  </Template>
</div>

<Story
    name="Default"
    args={{
    contents: 'テキストが入ります。テキストが入ります。\n'+
'テキストが入ります。テキストが入ります。\n'+
'テキストが入ります。'
  }}
/>

<style lang="scss">
  div {
    width: 400px;
    height: 360px;
  }
</style>
