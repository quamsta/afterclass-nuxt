<template>
  <div>
    <HeaderLarge />
    <h1>{{ feed.title }}</h1>
    <p>Current id is: {{ route.params.id }}</p>
  </div>
</template>
<script setup>
const route = useRoute();
//const event = await getEvent(route.params.id);
//const { data: event } = await useFetch("/api/count");

const { data: feed } = await useFetch(
  "https://content.uiowa.edu/api/v1/node/" + route.params.id + ".json",
  {
    initialCache: false,
    server: false,
  }
);
</script>

<style scoped>
</style>