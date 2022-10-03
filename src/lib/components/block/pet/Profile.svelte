<script lang="ts">
  import ProfileIcon from '$lib/components/element/pet/ProfileIcon.svelte'
  import { formatDistanceToNowStrict } from 'date-fns'
  import ja from 'date-fns/locale/ja'

  export let name: string
  export let breed: string
  export let birthday: string
  export let sex: '♂' | '♀'
  export let profileImage: string

  $: age = formatDistanceToNowStrict(new Date(birthday), { unit: 'month', locale: ja })
</script>

<div class="profile">
  <ProfileIcon {profileImage} {name} />
  <div class="profile-data">
    <h2>{name}</h2>
    <div>
      <span class="age">{age}</span>
      <span class="sex">{sex}</span>
    </div>
    <p class="breed">{breed}</p>
  </div>
</div>

<style lang="scss">
  .profile {
    display: flex;
    gap: 16px;

    .profile-data {
      font-size: 16px;
      font-weight: 700;

      h2 {
        font-size: 20px;
      }

      .breed {
        font-weight: 400;
      }
    }
  }
</style>
