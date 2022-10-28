<template>
  <masonry-wall
    :items="eventFeed.events"
    :ssr-columns="4"
    :column-width="300"
    :gap="16"
  >
    <template #default="{ item }">
      <EventCard :event="item.event" />
    </template>
  </masonry-wall>
</template>
<script setup>
const props = defineProps({
  eventFeed: Object,
});
</script>

<style scoped>
</style>