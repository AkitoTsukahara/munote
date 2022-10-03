<script lang="ts">
  import { format } from 'date-fns'

  export let date: string | null
  export let title: string

  $: formatedDate = date ? format(new Date(date), 'yyyy年MM月dd日') : null
</script>

<div class="date-area">
  <span class="title">{title}</span>
  <span class="date">{formatedDate}</span>
</div>

<style lang="scss">
  .date-area {
    display: grid;
    font-size: 14px;

    .title {
      font-weight: bold;
    }
  }
</style>
