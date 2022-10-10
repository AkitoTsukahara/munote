<script lang="ts">
  import { usePet } from '$lib/stores/pet/store'
  import type { GetOutput } from './+page.server'
  import BasicProfile from '$lib/components/section/pet/BasicProfile.svelte'

  export let data: GetOutput
  const {petStore, setFromApi} = usePet()
  $: setFromApi(data.pet)

  $: pet = $petStore
</script>

<div>
  {#if pet}
    <BasicProfile
        name={pet.name}
        breed={pet.breed}
        birthday={pet.birthday}
        sex={pet.sex}
        profileImage={pet.profileImage.url}
        familyDay={pet.familyday}
    />
  {/if}
</div>
