import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import MoveUI from "../components/MoveUI";

export default {
  title: "MoveUI",
  component: MoveUI,
};

const props = {
  locations: ["연못", "수사실", "나무꾼의 집"],
};

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [
        <div
          style={{ width: "100%", height: "100%", background: "red" }}
        ></div>,
        <div
          style={{ width: "100%", height: "100%", background: "blue" }}
        ></div>,
        <div
          style={{ width: "100%", height: "100%", background: "green" }}
        ></div>,
      ],
      locationNames: ["연못", "수사실", "나무꾼의 집"],
      idx: 0,
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.state.locations[this.state.idx]}
        <MoveUI
          {...this.state}
          onchange={(idx) => this.setState({ ...this.state, idx: idx })}
        />
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
