import React, { Component } from "react";
import CourtResult from "../components/Court";
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
  title: "CourtResult",
  component: CourtResult,
};

export const test = {
  render: () => (
    <div id="root">
      <VirtualApp style={{ background: "black" }}>
        <CourtResult tale={1} />
      </VirtualApp>
    </div>
  ),
};
