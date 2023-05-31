import React, { Component } from "react";
import Intro from "./components/IntroUI/Intro";
import Home from "./components/HomeUI/Home";
import Dialogue from "./components/DialogueUI/Dialogue";
import { getResizeEventListener } from "./services/responsiveFrame";

import Chapter from "pages/chapter";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Chapter chapter={2} />
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
