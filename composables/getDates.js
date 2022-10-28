import { isPast, parseISO, format as dateFormat } from "date-fns";

function getUpcomingDates(event, format) {
  var dates = [];

  event.value.event_instances.forEach((element, index) => {
    var parsedDate = parseISO(element.event_instance.start);

    if (!isPast(parsedDate)) {
      var formattedDate = dateFormat(
        parsedDate,
        "EEEE, MMMM d, yyyy h:mm aaaa"
      );
      //console.log(formattedDate);
      dates.push(formattedDate);
    }
  });

  return dates;

  //<li v-for="instance in eventFetched.event_instances" :key="instance.id">{{ instance.event_instance.start }}</li>
}

function formatDate(date) {}

function formatDateSmall(date) {}

export { getUpcomingDates, formatDate, formatDateSmall };
