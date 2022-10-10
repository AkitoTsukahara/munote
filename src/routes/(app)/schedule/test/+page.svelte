<script lang="ts">
  import FullCalendar, { Draggable, type EventInput, type CalendarOptions } from 'svelte-fullcalendar';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
  import jaLocal from '@fullcalendar/core/locales/ja'

  let calendarComponentRef: any;
  let calendarWeekends = true;
  let calendarEvents: EventInput[] = [
    // initial event data
    {title: 'Event Now', start: new Date()},
  ];
  let eventData = {title: 'my event', duration: '02:00'};

  function toggleWeekends() {
    calendarWeekends = !calendarWeekends;
  }

  function gotoPast() {
    /** @type {import('@fullcalendar/core').Calendar}  */
    let calendarApi = calendarComponentRef.getAPI();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  function handleDateClick(arg: any) {
    if (
      confirm('Would you like to add an event to ' + arg.dateStr + ' ?')
    ) {
      calendarEvents = [
        ...calendarEvents,
        {
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay,
        },
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
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    events: calendarEvents,
    height: 560,
    dateClick: (event: any) => handleDateClick(event)
  }
</script>

<style>
    @import url('https://cdn.jsdelivr.net/npm/@fullcalendar/core@4.4.2/main.min.css');
    @import url('https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@4.4.2/main.min.css');
    @import url('https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@4.4.2/main.min.css');

    .demo-app {
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
    }

    .demo-app-top {
        margin: 0 0 3em;
    }

    .demo-app-calendar {
        margin: 0 auto;
        max-width: 900px;
    }

    :global(.draggable) {
        color: white;
        background: #3788D8;
        width: fit-content;
        padding: 1rem;
        margin: 1rem;
        cursor: pointer;
    }
</style>

<div class="demo-app">
  <div class="demo-app-calendar">
    <FullCalendar
        bind:this={calendarComponentRef}
        {options}
        on:dateClick={(event) => handleDateClick(event.detail)}
    />
  </div>
</div>
