import React, { Component } from "react";
import Dialogue from "./components/DialogueUI/Dialogue";
import { getResizeEventListener } from "./services/responsiveFrame";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Dialogue />
      </div>
    );
  }
}
export default App;
