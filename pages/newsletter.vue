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
                            <label :for="'featured-event-' + index">Featured Event {{ index }}:</label>
                            <select :id="'featured-event-' + index" :name="'featured-event-' + index"
                                class="form-select">
                                <option @click="updateHtmlGen($event.target.value)" v-for="event in eventFeed.events"
                                    :key="event.id" :value="event.id" :label="event.event.title">
                                    {{ event.event.id }}
                                </option>
                                <!-- <EventCard v-for="event in eventFeed.events" :key="event.id" :event="event" /> -->
                            </select>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6">
                    <!-- <iframe src="/newsletter-preview" width="100" height="100"> </iframe> -->
                    <label :for="outputHTML">Copy/Paste HTML:</label>
                    <textarea readonly rows="40" cols="50" id="outputHTML" class="form-control output-html"
                        @click="$event.target.select()" v-model="htmlGen">
                     </textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from "vue";
const eventFeed = await getEvents();
//const htmlGen = getExampleNewsletterHtml();
const htmlGen = ref("");

function updateHtmlGen(id) {
    var event = getEventFromFeed(eventFeed, id);
    htmlGen.value = htmlGen.value + " " + event.event.title + " " + event.event.description;
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

