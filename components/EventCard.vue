<template>
  <div class="card" itemscope itemtype="http://data-vocabulary.org/Event">
    <img class="card__banner-img" alt="Late Night Programs Flag" role="presentation"
      src="~/assets/images/latenightbanner.png" v-if="isLateNight() == true" />
    <NuxtLink :to="eventLink" v-if="event.media"><img class="card-img-top" :src="event.media[0].large_image"
        loading="lazy" :height="event.media[0].original_height" :width="event.media[0].original_width"
        :alt="event.media[0].alt_text" /> </NuxtLink>
    <div class=" card-body">
      <h3 class="card-title">
        <NuxtLink :to="/event/ + id" itemprop="url">
          <span itemprop="summary">{{ event.title }}</span>

        </NuxtLink>
      </h3>
      <div class="card-text">
        <p class="card-subtitle">
          <EventDate :eventInstances="event.event_instances" v-if="event.event_instances" /><br />
          <EventLocation :event="event" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["event"]);

const id = props.event.id;

var eventLink = "/event/" + props.event.id;

// @todo turn into a composable:
function isLateNight() {
  if (!props.event.filters) {
    return false;
  }

  if (!props.event.filters.event_general_interest) {
    return false;
  }

  var interests = props.event.filters.event_general_interest;
  const result = interests.find(({ id }) => id === 7491);

  if (result) {
    return true;
  } else {
    return false;
  }
}

</script>