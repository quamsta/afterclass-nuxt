import { add, isPast, parseISO, format } from "date-fns";

const preferredLongDateFormat = "EEEE, MMMM d, h:mm aaaa";
const preferredLongDateFormatAllDay = "EEEE, MMMM d";

function getUpcomingDates(eventInstances) {
  var dates = [];

  if (!eventInstances.length) {
    return false;
  }

  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);
    // Base upcoming events on the day after the event instance
    var parsedDateDayAfter = add(parsedDate, { days: 1 });
    var formattedDate;

    if (!isPast(parsedDateDayAfter)) {
      if (element.event_instance.all_day) {
        formattedDate = format(parsedDate, preferredLongDateFormatAllDay);
        formattedDate += " (All Day)";
      } else {
        formattedDate = format(parsedDate, preferredLongDateFormat);
      }
      dates.push(formattedDate);
    }
  });

  return dates;
}

function getPastDates(eventInstances) {
  var dates = [];

  if (!eventInstances.length) {
    return false;
  }

  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);
    var parsedDateDayAfter = add(parsedDate, { days: 1 });
    var formattedDate;

    if (isPast(parsedDateDayAfter)) {
      if (element.event_instance.all_day) {
        formattedDate = format(parsedDate, preferredLongDateFormatAllDay);
        formattedDate += " (All Day)";
      } else {
        formattedDate = format(parsedDate, preferredLongDateFormat);
      }
    }
    dates.push(formattedDate);
  });

  return dates;
}

function getAllDates(eventInstances) {
  var dates = [];
  if (!eventInstances.length) {
    return false;
  }

  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);
    var formattedDate;
    if (element.event_instance.all_day) {
      formattedDate = format(parsedDate, preferredLongDateFormatAllDay);
      formattedDate += " (All Day)";
    } else {
      formattedDate = format(parsedDate, preferredLongDateFormat);
    }

    dates.push(formattedDate);
  });
  return dates;
}

export { getUpcomingDates, getPastDates, getAllDates };
