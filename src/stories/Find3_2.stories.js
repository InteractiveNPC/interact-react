import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import Find3_2 from "../pages/Find3_2";

export default {
  title: "Find3_2",
  component: Find3_2,
};

const props = {
};

class Example extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Find3_2/>
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
