import React, { Component } from "react";

import { getResizeEventListener } from "./services/responsiveFrame";

import UI from "./components/ui";

class App extends Component {
  render() {
    return (
      <div id="App">
        <UI />
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
