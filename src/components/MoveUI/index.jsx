import { useState } from "react";
import { locationNames, locations } from "./config";

import Nav from "./nav";

export default ({ chapter, onTalk, disabled, moveRecord, hero, setDialogueDisabled}) => {
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
          // setTimeout(()=>{ document.getElementById("dia").className = ""; }, 1000);
        }}
        moveRecord={moveRecord}
      />
      <Nav
        locationNames={locNames}
        idx={idx}
        setIdx={(i) => {
          setIdx(i);
          // setDialogueDisabled(true);
        }}
        disabled={disabled}
      />
    </>
  );
};
