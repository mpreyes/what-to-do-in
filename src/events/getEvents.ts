import axios from "axios";
import { EventSearch } from "./EventSearch";

export const buildRequestUrl = (baseUrl: string, event: EventSearch) => {
  let url = baseUrl;
  for (let [key, value] of Object.entries(event)) {
    url += "&" + key + "=" + value;
  }
  console.log("url", url);
  return url;
};
export const getEvents = async (
  url: string,
  setEvents: (events: any) => void
) => {
  await axios
    .get(url)
    .then((response) => {
      console.log("response", response.data.events.event);
      setEvents(response.data.events.event);
    })
    .catch((error) => {
      console.log("An error occurred: ", error);
      console.log(`An error occurred ${error.status}, ${error.statusText}`);
      setEvents([]);
    });
};
