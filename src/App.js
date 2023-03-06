import React, { Component } from "react";

import { getResizeEventListener } from "./services/responsiveFrame";

// import UI from "./components/ui";

import Indict from "./components/ui/Indict";

class App extends Component {
  render() {
    return (
      <div id="App">
        {/* <UI /> */}
        <Indict />
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
