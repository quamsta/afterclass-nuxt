async function getEvents() {
  const { data: feed } = await useFetch(
    "https://content.uiowa.edu/api/v1/views/events_api.json?display_id=threemonths&filters[interests]=284&items_per_page=100"
  );
  return feed;
}

async function getEvent(id) {
  const { data: feed } = await useFetch(
    "https://content.uiowa.edu/api/v1/node/" + id + ".json"
  );
  return feed;
}

export { getEvents, getEvent };
