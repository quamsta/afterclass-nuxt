<template>
    <span>
        <font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;
        <!-- <% if $isOnline %> -->
        <span v-if="props.event.virtual">Virtual
            Event
        </span>
        <!-- <% else %> -->

        <!-- <% if $Venue.Title || $Location %> -->
        <span itemprop="location" v-if="!props.event.virtual">
            <span v-if="props.event.room_number">
                {{ props.event.room_number }},
            </span>
            {{ props.event.location_name }}

        </span>
    </span>
</template>
<script setup>

const props = defineProps({
    event: Object
});

</script>