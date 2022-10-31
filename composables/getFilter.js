async function getFilter(filterType, id) {
  const types = await getFilterList(filterType);
  var typeSearch;
  var type;

  types.forEach((element) => {
    if (element.id == id) {
      type = element;
    }
  });

  return type;
}

async function getFilterList(filterType) {
  const feedUrl =
    "https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";
  var filterList = [];
  const { data: feed } = await useFetch(feedUrl);
  //console.log(feed.value["event_general_interest"]);

  filterList = feed.value[filterType];

  //console.log(interestList);
  return filterList;
}

export { getFilter };
