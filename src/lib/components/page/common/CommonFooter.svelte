<script lang="ts">
  import Calendar from '$lib/components/icon/Calendar.svelte'
  import Chart from '$lib/components/icon/Chart.svelte'
  import Diary from '$lib/components/icon/Diary.svelte'
  import Money from '$lib/components/icon/Money.svelte'
  import Pet from '$lib/components/icon/Pet.svelte'
  import { getUrl } from '$lib/modules/common/pathList.js'
</script>

<div class="footer-icon-list">
  <div class="footer-icon">
    <a href={getUrl('top')}>
      <Pet />
      <div class="icon-title">ペット</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href={getUrl('chart')}>
      <Chart />
      <div class="icon-title">チャート</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href={getUrl('diary')}>
      <Diary />
      <div class="icon-title">日記</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href={getUrl('money')}>
      <Money />
      <div class="icon-title">支出</div>
    </a>
  </div>
  <div class="footer-icon">
    <a href={getUrl('schedule')}>
      <Calendar />
      <div class="icon-title">スケジュール</div>
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
