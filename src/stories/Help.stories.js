import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import Help from "../pages/Temp";

export default {
  title: "Help",
  component: Help,
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
        <Help/>
      </div>
    );
  }
}

export const test = {
  render: () => getWithFullscreen(<Example />),
};
