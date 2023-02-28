import React, { Component } from "react";

import { getResizeEventListener } from "./services/responsiveFrame";
import DragEventExample from "./services/dragEvent/example";

class App extends Component {
  render() {
    return (
      <div id="App">
        <DragEventExample />
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
