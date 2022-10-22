<script lang="ts">
  import { usePet } from '$lib/stores/pet/store'
  import type { GetOutput } from './+page.server'
  import BasicProfile from '$lib/components/section/pet/BasicProfile.svelte'
  import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'

  export let data: GetOutput
  const { petStore, setFromApi } = usePet()
  $: setFromApi(data.pet)

  $: pet = $petStore
</script>

<div class="page">
  <div class="container">
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
  <CommonFooter />
</div>

<style lang="scss">
  .page {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
  }
  .container {
    flex-grow: 1;
    padding: 0 16px;
  }
</style>
