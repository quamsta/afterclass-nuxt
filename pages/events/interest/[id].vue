<template>
  <div>
    <Head>
      <Title>{{ interest.name }}</Title>
      <MetaImageDefault />
    </Head>
    <HeaderSmall />
    <div class="container-fluid">
      <h1 class="filter-header">Events tagged as "{{ interest.name }}":</h1>

      <div class="row">
        <div class="col-lg-7 m-auto">
          <div class="late-night-feature my-4" v-if="interest.id == 7491">
            <p>
              <img
                class="late-night-feature__flag"
                src="~/assets/images/latenightbanner.png"
                alt="Late Night Programs Flag"
                role="presentation"
              />The purpose of Late Night and Weekend Programs is to promote the
              health, well-being and safety of students by providing
              opportunities to engage with others and build community in an
              environment without alcohol.
            </p>
            <ul>
              <li>
                <a
                  href="https://leadandengage.uiowa.edu/our-programs/late-night-weekend-programs"
                  target="_blank"
                  >Learn more on the Late Night and Weekend Programs website.</a
                >
              </li>
              <li>
                <NuxtLink href="/events/interest/7491/"
                  >Find more events tagged as Late Night and Weekend
                  Programs.</NuxtLink
                >
              </li>
            </ul>

            <p class="late-night-feature__smalltext"></p>
          </div>
        </div>
      </div>

      <EventWall :eventFeed="eventFeed" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const interest = ref(
  await getFilter("event_general_interest", route.params.id)
);
const eventFeed = ref(
  await getEvents(null, null, null, null, null, route.params.id)
);

//console.log(interest);
</script>
  
<style scoped>
</style>


