<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ProfileIcon from '$lib/components/element/pet/ProfileIcon.svelte'
  import profileImage from '../../assets/images/profile-image.jpg'
</script>

<Meta title="Components/Element/Pet/ProfileIcon" component={ProfileIcon} />

<div>
  <Template let:args>
    <ProfileIcon {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    profileImage: profileImage,
    name: 'ムート'
  }}
/>
