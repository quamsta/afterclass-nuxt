<template>
  <div>
    <Head>
      <Meta
        name="description"
        content="After Class: A listing of student-focused events at the University of Iowa"
      />
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