<template>
  <div>
    <Head>
      <Title>{{ venue.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events located at "{{ venue.name }}":</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const venue = await getFilter("places", route.params.id);
const eventFeed = ref(
  await getEvents(null, null, route.params.id, null, null, null)
);
</script>
  
<style scoped>
</style>


