<script lang="ts">
  import { format } from 'date-fns'
  import startOfMonth from 'date-fns/startOfMonth'
  import endOfMonth from 'date-fns/fp/endOfMonth'
  export let value: string
  export let name: string

  const date = new Date(value)
  const DATE_FORMAT = 'yyyy-MM-dd\'T\'HH:mm'
  let formatDate = format(date, DATE_FORMAT)
  let min = format(startOfMonth(date), DATE_FORMAT)
  let max = format(endOfMonth(date), DATE_FORMAT)
</script>

<input type="datetime-local" name={name} bind:value={formatDate} min={min} max={max}>

<style lang="scss">
  input[type="datetime-local"] {
    position: relative;
    padding: 0 10px;
    width: 180px;
    height: 40px;
    border: 0;
    background: $card-background;
    box-sizing: border-box;
    font-size: 16px;
    color: $button-text;
  }
</style>
