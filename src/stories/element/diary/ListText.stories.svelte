<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ListText from '$lib/components/element/diary/ListText.svelte'
</script>

<Meta title="Components/Element/Diary/ListText" component={ListText} />

<div>
  <Template let:args>
    <ListText {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    title: '毎週火曜にYoutube三人称チャンネルのメンバー限定公開収録放送中'
  }}
/>
