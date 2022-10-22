<script lang="ts">
  import Profile from '$lib/components/block/pet/Profile.svelte'
  import Anniversary from '$lib/components/block/pet/Anniversary.svelte'

  export let name: string
  export let breed: string
  export let birthday: string
  export let sex: '♂' | '♀'
  export let profileImage: string
  export let familyDay: string
</script>

<div class="basic-profile">
  <div class="profile">
    <Profile {name} {breed} {birthday} {sex} {profileImage} />
  </div>
  <div class="anniversary">
    <Anniversary {birthday} {familyDay} />
  </div>
</div>

<style lang="scss">
  .basic-profile {
    background: $card-background;
    padding: 24px;
    border-radius: 8px;

    .profile {
      margin-bottom: 16px;
    }
  }
</style>
