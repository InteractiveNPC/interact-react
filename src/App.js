import React, { Component } from "react";
import Intro from "./components/IntroUI/Intro";
import Indict from "./components/Indict/index";
import { getResizeEventListener } from "./services/responsiveFrame";

import Chapter from "./pages/chapter";

import imagePreloader from "services/Loading";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Indict />
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