import React, { Component } from "react";
import CourtResult from "./components/CourtResult";
import { getResizeEventListener } from "./services/responsiveFrame";

class App extends Component {
  render() {
    return (
      <div id="App">
        <CourtResult tale={0} />
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
