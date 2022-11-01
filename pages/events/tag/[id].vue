<template>
  <div>
    <Head>
      <Title>{{ tag.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ tag.name }}":</h1>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const tag = await getFilter("keyword", route.params.id);
// console.log(tag);
const eventFeed = ref(
  await getEvents(null, null, null, route.params.id, null, null)
);

//console.log(interest);
</script>
  
<style scoped>
</style>


