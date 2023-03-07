import React from "react";

import { getWithFullscreen } from "../services/storybookHelper";

import Indict from "../components/ui/Indict";

export default {
  title: "Indict",
  component: Indict,
};

export const all = {
  render: () => getWithFullscreen(<Indict />),
};
