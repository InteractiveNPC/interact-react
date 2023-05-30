import { useState } from "react";

import { locationNames, locations } from "./config";

import Nav from "./nav";

export default ({ chapter }) => {
  const locNames = locationNames[chapter];
  const locs = locations[chapter];

  const [idx, setIdx] = useState(0);

  return (
    <>
      {locs[idx]}
      <Nav locationNames={locNames} idx={idx} setIdx={setIdx} />
    </>
  );
};
