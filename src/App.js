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
  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;
