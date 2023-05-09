import React, { Component } from "react";

import { getResizeEventListener } from "../responsiveFrame";

class VirtualApp extends Component {
  render() {
    return <div id="App">{this.props.children}</div>;
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default VirtualApp;
