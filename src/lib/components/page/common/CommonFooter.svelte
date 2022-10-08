<script lang="ts">
  import Calendar from "$lib/components/icon/Calendar.svelte"
  import Chart from "$lib/components/icon/Chart.svelte"
  import Diary from "$lib/components/icon/Diary.svelte"
  import Money from "$lib/components/icon/Money.svelte"
  import Pet from "$lib/components/icon/Pet.svelte"
</script>

<div class="footer-icon-list">
    <div class="footer-icon">
        <Pet/>
        <div class="icon-title">ペット</div>
    </div>
    <div class="footer-icon">
        <Chart/>
        <div class="icon-title">チャート</div>
    </div>
    <div class="footer-icon">
        <Diary/>
        <div class="icon-title">日記</div>
    </div>
    <div class="footer-icon">
        <Money/>
        <div class="icon-title">支出</div>
    </div>
    <div class="footer-icon">
        <Calendar/>
        <div class="icon-title">カレンダー</div>
    </div>
</div>

<style lang="scss">
    .footer-icon-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .footer-icon {
        display: grid;
        justify-content: center;
        :global(svg) {
            width: 40px;
            height: 40px;
            margin: 0 auto;
        }
    }
    .icon-title {
        font-size: 12px;
        text-align: center;
    }
</style>