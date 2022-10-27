<template>
  <div>
    <div class="container-fluid">
      <masonry-wall
        :items="eventFeed.events"
        :ssr-columns="1"
        :column-width="300"
        :gap="16"
      >
        <template #default="{ item, index }">
          <EventCard :event="item.event" />
        </template>
      </masonry-wall>
    </div>
  </div>
</template>
<script setup>
const eventFeed = await getEvents();
</script>

<style scoped>
</style>