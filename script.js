/* global FullCalendar */
document.addEventListener('DOMContentLoaded', async function () {
  const calendarEl = document.getElementById('calendar');

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxbF95YokEY-mMeatyixnW5m5d9QlUHMuIHtQDEYwCkzGspPMGMTIgJfahPmxbOJFc/exec');
    const events = await response.json();

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      allDaySlot: false,
      events: Array.isArray(events) ? events : []  // fallback to empty array
    });

    calendar.render();
  } catch (error) {
    console.error("Failed to load events:", error);

    // Fallback: still render an empty calendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      allDaySlot: false,
      events: []
    });

    calendar.render();
  }
});
