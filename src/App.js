import React, { useState, useEffect } from "react";

//import { getResizeEventListener } from "./services/responsiveFrame";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/example")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
