import { useState, useEffect } from "react";
import { getResizeEventListener } from "./services/responsiveFrame";
import Chapter from "pages/chapter";

export default () => {
  const [volume, setVolume] = useState([0.5, 0.5, 0.5]);

  useEffect(() => {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  });

  return (
    <div id="App">
      <Chapter chapter={3} volume={volume} setVolume={setVolume} />
    </div>
  );
};
