async function getFilter(filterType, id) {
  const types = await getFilterList(filterType);
  // console.log(types);
  var typeSearch;
  var type;
  if (filterType == "keyword") {
    types.keywords.forEach((element) => {
      if (element.id == id) {
        type = element;
      }
    });
  } else {
    types.forEach((element) => {
      if (element.id == id) {
        type = element;
      }
    });
  }

  return type;
}

async function getFilterList(filterType) {
  var filterList = [];
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
    filterList = feed.value;
  } else {
    filterList = feed.value[filterType];
  }

  //console.log(interestList);
  return filterList;
}

export { getFilter };
