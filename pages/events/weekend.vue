<template>
  <div>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">This weekend:</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import {
  isFriday,
  isSaturday,
  isSunday,
  nextFriday,
  nextSunday,
  format,
} from "date-fns";
import { ref } from "vue";
const now = new Date();
var start;
var end;

if (isFriday(now) || isSaturday(now) || isSunday(now)) {
  start = now;
} else {
  start = nextFriday(now);
}

if (isSunday(now)) {
  end = now;
} else {
  end = nextSunday(now);
}

start = format(start, "MM-dd-yyyy");
end = format(end, "MM-dd-yyyy");

const eventFeed = ref(await getEvents(start, end));
</script>
  
<style scoped>
</style>