import axios from "axios";

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
