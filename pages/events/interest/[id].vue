<template>
    <div>
        <HeaderSmall />
        <h1>{{ event.title }}</h1>
        <p>Current id is: {{ route.params.id }}</p>
    </div>
</template>
<script setup>
const route = useRoute();
const event = await getEvent(route.params.id);
</script>
  
<style scoped>

</style>