<template>
  <div class="card" itemscope itemtype="http://data-vocabulary.org/Event">
    <!-- <% if $IsLateNight %>
 		<img class="card__banner-img" alt="Late Night Programs Flag" role="presentation" src="$ThemeDir/dist/images/latenightbanner.png" />
 	<% end_if %> -->
    <!-- <% if $Image.URL %> -->
    <NuxtLink :to="eventLink" v-if="hasImage"><img class="card-img-top" :src="imageSrc" loading="lazy" /></NuxtLink>
    <!-- <% end_if %> -->
    <div class="card-body">
      <h3 class="card-title">
        <NuxtLink :to="/event/ + id" itemprop="url">
          <span itemprop="summary">{{ title }}</span>
        </NuxtLink>
      </h3>
      <!-- <% if Eventtypes %> -->
      <!-- <% loop Eventtypes.First %> -->
      <!-- <a class="card-title" href="$Link">$Titl e</a> -->
      <!-- <% end_loop %> -->
      <!-- <% end_if %> -->

      <!-- <div class="card-text"><% include EventCardDatesTimes %>$SummaryContent.Summary(30)</div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["event"]);

const id = props.event.id;
const title = props.event.title;
const hasImage = "media" in props.event;

var imageSrc;
var imageHeight;
var imageWidth;

var eventLink = '/event/' + id;

if (hasImage) {
  imageSrc = props.event.media[0].medium_image;
  imageHeight = props.event.media[0].original_height;
  imageWidth = props.event.media[0].original_width;
  // console.log(imageSrc);
}


</script>