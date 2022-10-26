<template>
  <div>
    <HeaderSmall />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="mt-6">After Class Newsletter Creator</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <form class="form-floating">
            <div v-for="index in 8" :key="index">
              <label :for="'featured-event-' + index"
                >Featured Event {{ index }}:</label
              >
              <select
                :id="'featured-event-' + index"
                :name="'featured-event-' + index"
                class="form-select"
                v-model="featuredEvents[index]"
              >
                <option value="0" label="(No event)">0</option>
                <option
                  @click="updateHtmlGen($event.target.value)"
                  v-for="event in eventFeed.events"
                  :key="event.event.id"
                  :value="event.event.id"
                  :label="event.event.title"
                >
                  {{ event.event.id }}
                </option>
                <!-- <EventCard v-for="event in eventFeed.events" :key="event.id" :event="event" /> -->
              </select>
            </div>
          </form>
          <label for="outputHTML">Copy/Paste HTML:</label>
          <textarea
            readonly
            rows="40"
            cols="50"
            id="outputHTML"
            class="form-control output-html"
            @click="$event.target.select()"
            v-model="htmlGen"
          >
          </textarea>
        </div>
        <div class="col-lg-6">
          <iframe :srcdoc="htmlGen" width="100%" height="1000"> </iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import TextClamp from "vue3-text-clamp";
import { ref } from "vue";
const eventFeed = await getEvents();
//const htmlGen = getExampleNewsletterHtml();
const htmlGen = ref("");
const featuredEvents = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);

// Run this initially:
updateHtmlGen();

function updateHtmlGen(id) {
  // var event = getEventFromFeed(eventFeed, id);
  //   console.log(featuredEvents);

  var featuredEventArray = [];

  console.log(featuredEvents.value);

  featuredEvents.value.forEach(function (element, index) {
    //console.log(element);
    if (element != 0) {
      var event = getEventFromFeed(eventFeed, element);
      featuredEventArray.push(getEventFromFeed(eventFeed, element));
    }
  });
  //   featuredEventArray.push(event);

  var html = getHtmlGen(featuredEventArray);
  htmlGen.value = html;
}

function getHtmlGen(featuredEventArray) {
  var htmlGen = getNewsletterHeaderHtml();
  var headerText = "";
  htmlGen += getNewsletterHeaderTextHtml(headerText);

  featuredEventArray.forEach(function (element, index) {
    console.log(element);
    htmlGen += getNewsletterFeaturedEventHtml(element.event);
  });

  htmlGen += getNewsletterFooterHtml();

  return htmlGen;
}

function getEventFromFeed(eventFeed, id) {
  // Gets a bunch of values based on an array of values, might be good for collecting
  // featured stuff later:
  //var item = eventFeed.value.events.filter(({id}) => !activeIds.includes(id));
  var item = eventFeed.value.events.find(function (element, index, array) {
    if (element.event.id == this) {
      return element.event;
    }
  }, id);

  return item;
}
</script>
  
<style scoped>
.output-html {
  font-family: monospace;
  font-size: 10px;
}
</style>

