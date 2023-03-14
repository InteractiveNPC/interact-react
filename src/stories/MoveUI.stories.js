import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";

import MoveUI from "../components/MoveUI";

export default {
  title: "MoveUI",
  component: MoveUI,
};

export const test = {
  render: () => getWithFullscreen(<MoveUI />),
};
