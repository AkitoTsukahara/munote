<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import BasicProfile from '$lib/components/section/pet/BasicProfile.svelte'
  import profileImage from '../../assets/images/profile-image.jpg'
</script>

<Meta title="Components/Section/Pet/BasicProfile" component={BasicProfile} />

<div>
  <Template let:args>
    <BasicProfile {...args} />
  </Template>
</div>

<Story
  name="Default"
  args={{
    name: 'ムート',
    breed: 'トイプードル',
    birthday: '2021-10-25T12:00:00+09:00',
    sex: '♂',
    profileImage: profileImage,
    familyDay: '2022-01-15T12:00:00+09:00'
  }}
/>
