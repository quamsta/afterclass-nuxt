<template>
  <div>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Today:</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { format } from "date-fns";
import { ref } from "vue";
const now = new Date();
var start;
var end;

start = format(now, "MM-dd-yyyy");
end = format(now, "MM-dd-yyyy");

const eventFeed = ref(await getEvents(start, end));
</script>
  
<style scoped>
</style>