import React, { Component } from "react";
import Intro from "./components/IntroUI/Intro";
import { getResizeEventListener } from "./services/responsiveFrame";

import Chapter from "./pages/chapter";

import imagePreloader from "services/imagePreloader";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Intro />
      </div>
    );
  }

  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();

    imagePreloader();
  }
  
}

export default App;