<template>
  <div>
    <div class="container-fluid">
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const eventFeed = ref(await getEvents());

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
</script>

<style scoped>
</style>