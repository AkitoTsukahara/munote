<script lang="ts">
  import Birthday from '$lib/components/icon/Birthday.svelte'
  import Home from '$lib/components/icon/Home.svelte'
  import Date from '$lib/components/element/pet/Date.svelte'
  import ElapsedDays from '$lib/components/element/pet/ElapsedDays.svelte'

  export let birthday: string
  export let familyDay: string
</script>

<div class="anniversary">
  <div class="birthday">
    <span class="icon">
      <Birthday />
    </span>
    <Date date={birthday} title={'誕生日'} />
    <ElapsedDays date={birthday} />
  </div>
  <div class="family-day">
    <Home />
    <Date date={familyDay} title={'家族になった日'} />
    <ElapsedDays date={familyDay} />
  </div>
</div>

<style lang="scss">
  .anniversary {
    .birthday {
      margin-bottom: 16px;
    }

    .birthday,
    .family-day {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
</style>
