<template>
  <div>
    <Title>{{ interest.name }}</Title>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ route.params.id }}":</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
//const tag = await getFilter("keyword", route.params.id);
const eventFeed = ref(
  await getEvents(null, null, null, route.params.id, null, null)
);

//console.log(interest);
</script>
  
<style scoped>
</style>


