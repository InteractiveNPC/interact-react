import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import MoveUI from "../components/MoveUI";
// import Nav from "../components/Nav";

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
          style={{
            width: "100%",
            height: "100%",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "1080px",
            background: "rgb(143, 120, 75)",
          }}
        >
          연못
        </div>,
        <div
          style={{
            width: "100%",
            height: "100%",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "1080px",
            background: "rgb(143, 120, 75)",
          }}
        >
          수사실
        </div>,
        <div
          style={{
            width: "100%",
            height: "100%",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "1080px",
            background: "rgb(143, 120, 75)",
          }}
        >
          나무꾼의 집
        </div>,
        <div
          style={{
            width: "100%",
            height: "100%",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "1080px",
            background: "rgb(143, 120, 75)",
          }}
        >
          어디어디
        </div>,
        <div
          style={{
            width: "100%",
            height: "100%",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "1080px",
            background: "rgb(143, 120, 75)",
          }}
        >
          저기저기
        </div>,
      ],
      locationNames: ["연못", "수사실", "나무꾼의 집", "어디어디", "저기저기"],
      idx: 0,
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.state.locations[this.state.idx]}
        {/* <Nav /> */}
        <MoveUI
          {...this.state}
          setIdx={(idx) => this.setState({ ...this.state, idx: idx })}
        />
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
