import React, { useEffect, useState } from "react";
import "./App.css";
import { getEvents, buildRequestUrl } from "./events";
import { EventSearch } from "./events/EventSearch";

function App() {
  const [events, setEvents] = useState<any[]>([]);
  let apiKey = "LOL_U_THOT";

  let comedyEventsInTheFuture: EventSearch = {
    location: "Nashville",
    date: "Future",
    category: "comedy",
    within: "25",
    units: "mi",
    sort_order: "popularity",
  };

  let musicEventsInTheFuture: EventSearch = {
    location: "Nashville",
    date: "Future",
    category: "comedy",
    within: "25",
    units: "mi",
    sort_order: "popularity",
  };

  useEffect(() => {
    const url = buildRequestUrl(
      `json/events/search?app_key=${apiKey}`,
      comedyEventsInTheFuture
    );

    console.log("component did mount?");

    getEvents(url, setEvents);
  }, []);
  console.log("the ss", events);
  for (let event of events) {
    console.log(event);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Lets figure out what to do when we're too lazy to plan for it.</p>
        <p>
          <div>
            {events.map((event, index) => {
              return (
                <div key={index} style={{ backgroundColor: "#5bbce4" }}>
                  <h3 style={{ color: "black" }}>{event.title}</h3>
                  <h4>{event.venue_name}</h4>
                  <h4>{event.venue_address}</h4>
                  <h4>{event.start_time}</h4>
                  <h4>{event.postal_code}</h4>
                  <h4>{event.title}</h4>

                  <p> {event.decription}</p>
                  <a href={event.url}>{event.title}</a>
                </div>
              );
            })}
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
