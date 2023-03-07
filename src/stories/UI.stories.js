import React from "react";

import { getWithFullscreen } from "../services/storybookHelper";

import UI from "../components/ui";

export default {
  title: "UI",
  component: UI,
};

export const all = {
  render: () => getWithFullscreen(<UI />),
};
