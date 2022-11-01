<template>
  <div>
    <Head>
      <Title>{{ interest.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ interest.name }}":</h1>
      <div v-if="interest.id == 7491">
        <p class="text-center">
          <a
            href="https://leadandengage.uiowa.edu/our-programs/late-night-weekend-programs"
            >Learn more about Late Night and Weekend Programs on the Leadership
            and Engagement wesbite.</a
          >
        </p>
      </div>
      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const interest = await getFilter("event_general_interest", route.params.id);
const eventFeed = ref(
  await getEvents(null, null, null, null, null, route.params.id)
);

//console.log(interest);
</script>
  
<style scoped>
</style>


