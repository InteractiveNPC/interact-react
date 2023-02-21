import React, { Component } from "react";

import DragEventExample from "./components/DragEventExample";

class App extends Component {
  render() {
    return (
      <div id="App">
        <DragEventExample />
      </div>
    );
  }
  componentDidMount() {
    const FixRatio = () => {
      const root = document.querySelector("#root");
      const app = document.querySelector("#App");

      let width = root.clientWidth;
      let height = width * 0.5625;

      if (height > root.clientHeight) {
        height = root.clientHeight;
        width = height * 1.7777;
      }

      app.style.width = `${width}px`;
      app.style.height = `${height}px`;
    };

    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;
