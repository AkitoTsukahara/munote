<script lang="ts">
  import FullCalendar, { type CalendarOptions, type EventInput } from 'svelte-fullcalendar'
  import interactionPlugin from '@fullcalendar/interaction'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import jaLocal from '@fullcalendar/core/locales/ja'
  import type { GetOutput } from './+page.server'
  import { useSchedule } from '$lib/stores/schedule/store'


  export let data: GetOutput
  const {scheduleStore, setFromApi} = useSchedule()
  $: setFromApi(data.schedule)

  $: schedule = $scheduleStore
  let calendarEvents: EventInput[] = $scheduleStore
  let calendarComponentRef;

  $: handleDateClick = (event: any) => {
    if (
      confirm('Would you like to add an event to ' + event.dateStr + ' ?')
    ) {
      let calendarApi = event.view.calendar
      calendarApi.unselect();
      calendarEvents = [
        ...calendarEvents,
        {
          title: 'New Event',
          start: event.date,
          allDay: event.allDay,
        } as EventInput,
      ];
    }
  }

  let options: CalendarOptions = {
    droppable: true,
    editable: true,
    initialView: 'dayGridMonth',
    headerToolbar: {left: 'prev,next', center: 'title', right: 'today'},
    locale: jaLocal,
    buttonText: {today: 'BACK'},
    plugins: [dayGridPlugin, interactionPlugin],
    height: 560,
    events: calendarEvents,
    dateClick: (event: any) => handleDateClick(event),
    select: (event: any) => handleDateClick(event)
  }

  $: calendarEvents
  $: options
</script>

<div class="Calendar">
  <FullCalendar
      bind:this={calendarComponentRef}
      {options}
  />
</div>
