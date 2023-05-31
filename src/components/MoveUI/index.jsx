import { useState } from "react";

import { locationNames, locations } from "./config";

import Nav from "./nav";

export default ({ chapter, onTalk, dialogueDisabled }) => {
  const locNames = locationNames[chapter];

  const [idx, setIdx] = useState(0);

  const Location = locations[chapter][idx];

  return (
    <>
      <Location onTalk={dialogueDisabled ? onTalk : () => {}} />
      <Nav
        locationNames={locNames}
        idx={idx}
        setIdx={setIdx}
        disabled={!dialogueDisabled}
      />
    </>
  );
};
