<template>
  <div>
    <Title>{{ eventFetched.title }}</Title>
    <Meta name="title" :content="eventFetched.title" />
    <Meta
      name="description"
      :content="eventFetched.description_text"
      v-if="eventFetched.description_text"
    />
    <Meta name="og:title" :content="eventFetched.title" />
    <Meta
      name="og:description"
      :content="eventFetched.description_text"
      v-if="eventFetched.description_text"
    />
    <Meta
      name="og:image:url"
      :content="eventFetched.media[0].original_image"
      v-if="eventFetched.media"
    />
    <Meta
      name="og:image:width"
      :content="eventFetched.media[0].original_width"
      v-if="eventFetched.media"
    />
    <Meta
      name="og:image:height"
      :content="eventFetched.media[0].original_height"
      v-if="eventFetched.media"
    />
    <Meta
      name="og:image:alt"
      :content="eventFetched.media[0].alt_text"
      v-if="eventFetched.media"
    />
    <HeaderSmall />

    <div class="container content-container" role="main" id="content">
      <div class="row d-flex pt-4 pt-xl-5 justify-content-center">
        <div class="col-lg-7 col-xl-8">
          <article class="position-relative">
            <img
              class="card__banner-img"
              alt="Late Night Programs Flag"
              role="presentation"
              src="~/assets/images/latenightbanner.png"
              v-if="isLateNight() == true"
            />

            <img
              class="d-block w-100 mb-2 event-image"
              :src="eventFetched.media[0].large_image"
              :alt="eventFetched.media[0].alt_text"
              :height="eventFetched.media[0].original_height"
              :width="eventFetched.media[0].original_width"
              v-if="eventFetched.media"
              placeholder
            />

            <h1>{{ eventFetched.title }}</h1>
            <div class="event-details">
              <p>
                <EventDate
                  :eventInstances="eventFetched.event_instances"
                  v-if="eventFetched.event_instances"
                />
                <br />
                <EventLocation :event="eventFetched" />
              </p>
              <div v-if="upcomingDates.length > 1">
                <p class="mb-0">
                  <button
                    class="btn btn-outline-primary mb-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDates"
                    aria-expanded="false"
                    aria-controls="collapseDates"
                  >
                    All upcoming dates
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                </p>
                <div class="collapse" id="collapseDates">
                  <ul class="mb-3">
                    <li v-for="date in upcomingDates" :key="date.id">
                      {{ date }}
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <a
                  class="btn btn-outline-primary mb-1 me-1"
                  v-if="eventFetched.virtual_url"
                  :href="eventFetched.virtual_url"
                  rel="noopener"
                  target="_blank"
                  >Virtual event link
                  <font-awesome-icon
                    icon="fas fa-laptop-house"
                  ></font-awesome-icon>
                </a>

                <a
                  :href="eventFetched.url"
                  v-if="eventFetched.url"
                  class="btn btn-outline-primary mb-1"
                  target="_blank"
                  >Event website
                  <font-awesome-icon
                    icon="fas fa-external-link-alt"
                  ></font-awesome-icon>
                </a>
              </p>
            </div>
            <div class="late-night-feature my-4" v-if="isLateNight() == true">
              <p>
                <img
                  class="late-night-feature__flag"
                  src="~/assets/images/latenightbanner.png"
                  alt="Late Night Programs Flag"
                  role="presentation"
                />This event is part of
                <a
                  href="https://leadandengage.uiowa.edu/our-programs/late-night-weekend-programs"
                  target="_blank"
                  >Late Night and Weekend Programs</a
                >. The purpose of Late Night and Weekend Programs is to promote
                the health, well-being and safety of students by providing
                opportunities to engage with others and build community in an
                environment without alcohol.
              </p>
              <ul>
                <li>
                  <a
                    href="https://leadandengage.uiowa.edu/our-programs/late-night-weekend-programs"
                    target="_blank"
                    >Learn more on the Late Night and Weekend Programs
                    website.</a
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
            <div
              class="content mb-5"
              v-html="eventFetched.description"
              v-if="eventFetched.description"
            ></div>

            <p v-if="eventFetched.keywords">
              <EventFilterList type="tag" :filters="eventFetched.keywords" />
            </p>

            <p v-if="eventFetched.filters.event_types">
              <EventFilterList
                type="type"
                :filters="eventFetched.filters.event_types"
              />
            </p>

            <p v-if="eventFetched.events_site_url">
              <a
                :href="eventFetched.events_site_url"
                class="btn btn-outline-primary mb-2"
                target="_blank"
                >View on the UI Events Calendar
                <font-awesome-icon
                  icon="fas fa-external-link-alt"
                ></font-awesome-icon>
              </a>
            </p>

            <div v-if="eventFetched.contact_email">
              <hr />
              <p>
                Questions about this event?
                <a
                  :href="'mailto:' + eventFetched.contact_email"
                  class="report-problem-link"
                  >Contact {{ eventFetched.contact_name }}.</a
                >
              </p>
            </div>

            <p>
              <i
                >Individuals with disabilities are encouraged to attend all
                University of Iowa-sponsored events. If you are a person with a
                disability who requires a reasonable accommodation in order to
                participate in this program, please contact
                {{ eventFetched.contact_name }} in advance at
                <a :href="'tel:' + eventFetched.contact_phone">{{
                  eventFetched.contact_phone
                }}</a>
                or
                <a :href="'mailto:' + eventFetched.contact_email">{{
                  eventFetched.contact_email
                }}</a
                >.
              </i>
            </p>
          </article>
        </div>
      </div>
    </div>

    <h2
      class="text-center pt-4"
      @click="toggleMoreEventsList"
      id="more-events-heading"
    >
      More events
    </h2>
    <MoreEvents />

    <!-- <div v-if="isShowMoreEvents">
      <MoreEvents />
    </div> -->
  </div>
</template>
<script setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
const route = useRoute();
const eventFetched = await getEvent(route.params.id);
const upcomingDates = getUpcomingDates(eventFetched.value.event_instances);
const isShowMoreEvents = ref(false);
const title = eventFetched.value.name;
// const MoreEvents = defineAsyncComponent(() =>
//   import("~/components/MoreEvents.vue")
// );

function isLateNight() {
  if (!eventFetched.value.filters) {
    return false;
  }

  if (!eventFetched.value.filters.event_general_interest) {
    return false;
  }

  var interests = eventFetched.value.filters.event_general_interest;
  const result = interests.find(({ id }) => id === 7491);

  if (result) {
    return true;
  } else {
    return false;
  }
}
onMounted(() => {
  setTimeout(() => {
    isShowMoreEvents.value = true;
  }, "500");
});
// onMounted(() => {
//   console.log("mounted page");
//   console.log("isShowMoreEvents: " + isShowMoreEvents.value);
//   let observerOptions = {
//     threshold: 0.1,
//   };

//   let observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("loaded more events");
//         isShowMoreEvents.value = true;
//       }
//     });
//   }, observerOptions);
//   let target = document.querySelector("#more-events-heading");
//   //console.log("target : " + target);
//   observer.observe(target);
// });

//console.log(eventFetched);
</script>

<style scoped>
</style>