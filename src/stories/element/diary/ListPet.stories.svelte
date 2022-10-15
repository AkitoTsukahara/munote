<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ListPet from '$lib/components/element/diary/ListPet.svelte'
  import profileImage from '../../assets/images/profile-image.jpg'
</script>

<Meta title="Components/Element/Diary/ListPet" component={ListPet}/>

<div>
  <Template let:args>
    <ListPet {...args}/>
  </Template>
</div>

<Story
    name="Default"
    args={{
    icon: profileImage,
    name: 'ムート'
  }}
/>
