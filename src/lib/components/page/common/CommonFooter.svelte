<script lang="ts">
  import Calendar from '$lib/components/icon/Calendar.svelte'
  import Chart from '$lib/components/icon/Chart.svelte'
  import Diary from '$lib/components/icon/Diary.svelte'
  import Money from '$lib/components/icon/Money.svelte'
  import Pet from '$lib/components/icon/Pet.svelte'
</script>

<div class="footer-icon-list">
  <div class="footer-icon">
    <a href="/">
      <Pet />
      <div class="icon-title">ペット</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href="/chart">
      <Chart />
      <div class="icon-title">チャート</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href="/diary">
      <Diary />
      <div class="icon-title">日記</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href="/money">
      <Money />
      <div class="icon-title">支出</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href="/calendar">
      <Calendar />
      <div class="icon-title">カレンダー</div>
    </a>
  </div>
</div>

<style lang="scss">
  .footer-icon-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $card-background;
    padding: 8px 16px;
  }
  .footer-icon {
    display: grid;
    justify-content: center;
    :global(svg) {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }

    a {
      color: $headline;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .icon-title {
    font-size: 12px;
    text-align: center;
  }
</style>
