<template>
  <div>
    <div class="container-fluid">
      <EventWall :events="eventFeed.events" />
    </div>
  </div>
</template>
<script setup>
const eventFeed = await getEvents();
</script>

<style scoped>
</style>