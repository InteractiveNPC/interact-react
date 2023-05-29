import React, { Component } from "react";
import Intro from "./components/IntroUI/Intro";
import Home from "./components/HomeUI/Home";
import { getResizeEventListener } from "./services/responsiveFrame";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Home init="true"/>
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
