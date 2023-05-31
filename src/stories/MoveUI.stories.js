import React from "react";
import { getWithFullscreen } from "services/storybookHelper";

import MoveUI from "components/MoveUI";
import Nav from "components/Nav";

export default {
  title: "MoveUI",
  component: MoveUI,
};

export const woodcutter = {
  render: () =>
    getWithFullscreen(
      <>
        <MoveUI
          chapter={1}
          onTalk={() => alert("무시당했다..!")}
          dialogueDisabled={true}
        />
        <Nav />
      </>
    ),
};

export const twosisters = {
  render: () =>
    getWithFullscreen(
      <>
        <MoveUI
          chapter={2}
          onTalk={() => alert("무시당했다..!")}
          dialogueDisabled={true}
        />
        <Nav />
      </>
    ),
};
