<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'
  </script>
  
  <Meta title="Components/Page/Common/CommonFooter" component={CommonFooter} />
  
  <div>
    <Template let:args>
      <CommonFooter {...args} />
    </Template>
  </div>
  
  <Story
    name="Default"
    args={{
      title: '誕生日',
      date: '2021-10-25T12:00:00+09:00'
    }}
  />
  