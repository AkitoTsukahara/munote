<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Profile from '$lib/components/block/pet/Profile.svelte'
  import profileImage from '../../assets/images/profile-image.jpg'
</script>

<Meta title="Components/Block/Pet/Profile" component={Profile} />

<div>
  <Template let:args>
    <Profile {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    name: 'ムート',
    breed: 'トイプードル',
    birthday: '2021-10-25T12:00:00+09:00',
    sex: '♂',
    profileImage: profileImage
  }}
/>
