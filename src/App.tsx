import React, { useEffect, useState } from "react";
import "./App.css";
import { getEvents } from "./events";

function App() {
  const [events, setEvents] = useState<any[]>([]);
  let apiKey = "LOL_U_THOT";

  const url = `json/events/search?app_key=${apiKey}&location=Nashville`;

  useEffect(() => {
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
          <ul>
            {events.map((event, index) => {
              return (
                <a key={index} href={event.url}>
                  {event.title}
                </a>
              );
            })}
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
