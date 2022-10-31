<template>
  <div>
    <Title>{{ type.name }}</Title>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events categorized under "{{ type.name }}":</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const type = await getFilter("event_types", route.params.id);
const eventFeed = ref(
  await getEvents(null, null, null, null, route.params.id, null)
);
</script>
  
<style scoped>
</style>


