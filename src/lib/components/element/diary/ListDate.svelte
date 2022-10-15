<script lang="ts">
  import getDay from 'date-fns/getDay'
  import getDate from 'date-fns/getDate'
  import { formatDay } from '$lib/package/date-fns'
  export let date: string

  let dateObject = new Date(date)
  let day = formatDay(getDay(dateObject))
  let onlyDate = getDate(dateObject)
</script>

<div class="date">
  <span class="day">{day}</span>
  <span>{onlyDate}</span>
</div>

<style lang="scss">
  .date {
    display: grid;
    gap: 8px;
    font-size: 24px;
    color: $highlight;
    text-align: center;

    .day {
      font-size: 16px;
    }
  }
</style>
