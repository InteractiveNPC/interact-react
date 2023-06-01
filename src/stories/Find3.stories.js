import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import Find3 from "../pages/Find3";

export default {
  title: "Find3",
  component: Find3,
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
        <Find3/>
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
