<template>
  <div>
    <Head>
      <MetaImageDefault />
    </Head>
    <HeaderLarge />
    <div class="container-fluid">
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const eventFeed = ref(await getEvents());
</script>

<style scoped>
</style>