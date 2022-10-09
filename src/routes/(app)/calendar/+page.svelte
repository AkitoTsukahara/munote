<script lang="ts">
  import FullCalendar, { type CalendarOptions } from 'svelte-fullcalendar'
  import interactionPlugin from '@fullcalendar/interaction'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import jaLocal from '@fullcalendar/core/locales/ja'

  const options: CalendarOptions = {
    droppable: true,
    editable: true,
    initialView: 'dayGridMonth',
    headerToolbar: { left: 'prevYear,prev,next,nextYear', center: 'title', right: 'today' },
    locale: jaLocal,
    buttonText: { today: '今月に戻る' },
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (event: any) => handleDateClick(event)
  }

  const handleDateClick = (event: any) => {
    console.log(event)
  }
</script>

<div class="Calendar">
  <FullCalendar {options} />
</div>
