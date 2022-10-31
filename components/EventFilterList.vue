<template>
  <span>
    {{ labels[props.type] }}:
    <span v-for="link in links" :key="link.link">
      <NuxtLink
        class="btn btn-outline-white btn-sm mb-1 mx-1"
        :to="link.link"
        >{{ link.label }}</NuxtLink
      >
    </span>
  </span>
</template>
<script setup>
const props = defineProps({
  type: String,
  filters: Array,
});

const labels = {
  tag: "Tagged as",
  type: "Categorized under",
};

const baseUrls = {
  tags: "tag",
  types: "type",
};

var links = [];

if (props.filters.length > 0) {
  props.filters.forEach((element, index) => {
    links.push({
      link: "/events/" + props.type + "/" + element.id,
      label: element.name,
    });
  });
}
</script>