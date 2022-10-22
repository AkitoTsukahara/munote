<script lang="ts">
  import { format } from 'date-fns'
  import Diary from '$lib/components/icon/Diary.svelte'
  import ArrowLeft from '$lib/components/icon/ArrowLeft.svelte'

  export let id: string
  export let date: string

  let dateObject = new Date(date)
  let publicDate = format(dateObject, 'yyyy年MM月dd日 hh:mm ')
</script>

<div class="header-menu">
  <div class="back">
    <a href="/diary"><ArrowLeft /></a>
  </div>
  <div class="date">
    {publicDate}
  </div>
  <div class="edit">
    <a href="/diary/{id}/edit"><Diary /></a>
  </div>
</div>

<style lang="scss">
  .header-menu {
    display: flex;
    justify-content: space-between;
    background: $card-background;
    color: $paragraph;
    padding: 8px;
    .back,
    .edit {
      width: 16px;
      a {
        color: $paragraph;
      }
    }
  }
</style>
