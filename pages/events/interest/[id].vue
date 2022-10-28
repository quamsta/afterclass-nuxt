<template>
  <div>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ interest.name }}":</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const interest = await getFilter("event_general_interest", route.params.id);
const eventFeed = ref(
  await getEvents(null, null, null, null, null, route.params.id)
);

//console.log(interest);
</script>
  
<style scoped>
</style>


