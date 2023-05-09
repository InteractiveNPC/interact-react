import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import Find from "../components/Find";

export default {
  title: "Find",
  component: Find,
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
        <Find/>
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
