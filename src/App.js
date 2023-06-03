import React, { Component } from "react";
import Dialogue from "./components/DialogueUI/Dialogue";
import Indict from "./components/Indict/index";
import Indict2 from "./components/Indict/index2";
import Indict3 from "./components/Indict/index3";
import Tw1 from "./components/Indict/twsister1";
import Tw2 from "./components/Indict/twosister2";
import Tw3 from "./components/Indict/twosister3";
import Mvui from "./components/MoveUI/index";

import Intro from "./components/IntroUI/Intro";

import { getResizeEventListener } from "./services/responsiveFrame";

import Chapter from "./pages/chapter";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Tw3 />
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
