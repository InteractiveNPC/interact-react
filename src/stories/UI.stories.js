import React from "react";

import { getWithFullscreen } from "../services/storybookHelper";

import Nav from "../components/Nav";

export default {
  title: "Nav",
  component: Nav,
};

export const all = {
  render: () => getWithFullscreen(<Nav />),
};
