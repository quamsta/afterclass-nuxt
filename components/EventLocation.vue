<template>
  <span v-if="props.event.location_name || props.event.virtual">
    <font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;
    <!-- <% if $isOnline %> -->
    <span v-if="props.event.virtual">Virtual Event </span>
    <!-- <% else %> -->

    <!-- <% if $Venue.Title || $Location %> -->
    <span itemprop="location" v-if="!props.event.virtual">
      <span v-if="props.event.room_number">
        {{ props.event.room_number }},
      </span>
      <NuxtLink
        v-if="props.event.location_id"
        :href="'/events/venue/' + props.event.location_id"
        >{{ props.event.location_name }}</NuxtLink
      >
      <span v-else>{{ props.event.location_name }}</span>
    </span>
  </span>
</template>
<script setup>
const props = defineProps({
  event: Object,
});
</script>