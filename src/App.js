import React, { Component } from "react";

import { getResizeEventListener } from "./services/responsiveFrame";

class App extends Component {
  render() {
    return <div id="App"></div>;
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;
