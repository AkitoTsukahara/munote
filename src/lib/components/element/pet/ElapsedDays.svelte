<script lang="ts">
  import { formatDistanceToNowStrict } from 'date-fns'
  import ja from 'date-fns/locale/ja'
  export let date: string | null

  $: calcedElapsedDays = date
    ? formatDistanceToNowStrict(new Date(date), { unit: 'day', locale: ja })
    : null
</script>

<div class="elapsed-days">
  <span class="days">日数</span>
  <span>{calcedElapsedDays}</span>
</div>

<style lang="scss">
  .elapsed-days {
    display: grid;
    font-size: 14px;

    .days {
      font-weight: bold;
    }
  }
</style>
