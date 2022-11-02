import { ref } from "vue";

async function getFilter(filterType, id) {
  const types = ref(await getFilterList(filterType));
  // console.log(types);
  var type;

  //console.log(types.value);
  if (filterType == "keyword") {
    // console.log("searching through keywords...");
    // console.log(types.value);
    types.value.keywords.forEach((element) => {
      if (element.id == id) {
        console.log("found one!");
        type = element;
      }
    });
  } else {
    // console.log("searching through other filters");
    // console.log(types.value);
    types.value.forEach((element) => {
      if (element.id == id) {
        // console.log("found one!");
        type = element;
      }
    });
  }

  return type;
}

async function getFilterList(filterType) {
  var filterList = ref([]);
  var feedUrl;
  if (filterType == "keyword") {
    feedUrl =
      "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=keywords";
  } else {
    feedUrl =
      "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";
  }

  const { data: feed } = await useFetch(feedUrl);
  //console.log(feed.value);

  if (filterType == "keyword") {
    filterList.value = feed.value;
  } else {
    filterList.value = feed.value[filterType];
  }

  //console.log(interestList);
  return filterList;
}

export { getFilter };
