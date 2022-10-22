<script lang="ts">
  import Garbage from '$lib/components/icon/Garbage.svelte'
  import Share from '$lib/components/icon/Share.svelte'

  export let id: string

  function deleteDiary() {
    let check = confirm('この日記を削除してもよろしいですか？')
    if (check) {
      // TODO 削除機能
      location.href = '/diary'
    }
  }

  function shareDiary() {
    alert('シェア機能は準備中です👷')
  }
</script>

<div class="footer-menu">
  <div class="garbage" on:click={deleteDiary}>
    <Garbage />
  </div>
  <div class="share" on:click={shareDiary}>
    <Share />
  </div>
</div>

<style lang="scss">
  .footer-menu {
    display: flex;
    justify-content: space-between;
    background: $card-background;
    color: $paragraph;
    padding: 16px;
  }
  .garbage,
  .share {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>
