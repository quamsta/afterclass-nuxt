<template>
  <masonry-wall
    :items="eventFeed.events"
    :ssr-columns="4"
    :column-width="300"
    :gap="16"
    v-if="eventFeed.events"
  >
    <template #default="{ item }">
      <EventCard :event="item.event" />
    </template>
  </masonry-wall>
  <p v-else class="text-center">No upcoming events found.</p>
</template>
<script setup>
const props = defineProps({
  eventFeed: Object,
});
</script>

<style scoped>
</style>