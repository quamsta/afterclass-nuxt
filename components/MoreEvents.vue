<template>
  <div>
    <div class="container-fluid">
      <EventWall :eventFeed="shuffledEvents" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const eventFeed = ref(await getEvents());

var shuffledEvents = [{ events: [] }];

shuffledEvents.events = ref(shuffleArray(eventFeed.value.events));

// console.log(shuffledEvents);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.slice(0, 10);
}
</script>

<style scoped>
</style>