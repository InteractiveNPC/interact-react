import React, { Component } from "react";
import Intro from "./components/IntroUI/Intro";
import Home from "./components/HomeUI/Home";
import { getResizeEventListener } from "./services/responsiveFrame";
import Chapter from "./pages/chapter";

import Loading from "./components/Loading";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Loading App={<Intro/>} />
      </div>
    );
  }

  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
    //imagePreloader();
  }
  
}

export default App;