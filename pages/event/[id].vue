<template>
  <div>
    <HeaderLarge />
    <h1>{{ event.title }}</h1>
  </div>
</template>
<script setup>
const route = useRoute();
const event = await getEvent(route.params.id);
</script>

<style scoped>
</style>