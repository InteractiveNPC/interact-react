import React, { Component } from "react";

import Nav from "../components/Nav/_index";

import { getResizeEventListener } from "/src/services/responsiveFrame";

class VirtualApp extends Component {
  render() {
    return (
      <div id="App" style={{ background: "rgb(143, 120, 75)" }}>
        {this.props.children}
      </div>
    );
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default {
  title: "Nav",
  component: Nav,
};

export const test = {
  render: () => (
    <div id="root">
      <VirtualApp style={{ background: "black" }}>
        <Nav />
      </VirtualApp>
    </div>
  ),
};
