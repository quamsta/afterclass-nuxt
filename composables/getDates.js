import { isPast, parseISO, format as dateFormat } from "date-fns";

const preferredLongDateFormat = "EEEE, MMMM d, h:mm aaaa";

function getUpcomingDates(eventInstances) {
  var dates = [];

  if (!eventInstances.length) {
    return false;
  }

  eventInstances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);

    if (!isPast(parsedDate)) {
      var formattedDate = dateFormat(parsedDate, preferredLongDateFormat);
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
    if (isPast(parsedDate)) {
      var formattedDate = dateFormat(parsedDate, preferredLongDateFormat);
      dates.push(formattedDate);
    }
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

    var formattedDate = dateFormat(parsedDate, preferredLongDateFormat);

    dates.push(formattedDate);
  });
  return dates;
}

function formatDate(date) {}

function formatDateSmall(date) {}

export {
  getUpcomingDates,
  getPastDates,
  getAllDates,
  formatDate,
  formatDateSmall,
};
