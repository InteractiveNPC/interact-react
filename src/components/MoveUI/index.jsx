import { useState } from "react";

import { locationNames, locations } from "./config";

import Nav from "./nav";

export default ({ chapter, onTalk, disabled, moveRecord, hero }) => {
  const locNames = locationNames[chapter];

  const [idx, setIdx] = useState(0);

  const Location = locations[chapter][idx];

  return (
    <>
      <Location
        hero={hero}
        onTalk={disabled ?  () => {} : onTalk}
        goOffice={() => {
          setIdx(0);
        }}
        moveRecord={moveRecord}
      />
      <Nav
        locationNames={locNames}
        idx={idx}
        setIdx={setIdx}
        disabled={disabled}
      />
    </>
  );
};
