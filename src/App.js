import { useState, useEffect } from "react";
import { VolumeContext } from "./contexts";
import { getResizeEventListener } from "./services/responsiveFrame";

import Intro from "./components/IntroUI/Intro";

import Loading from "./components/Loading";

export default () => {
  const [volume, setVolume] = useState([0.5, 0.5, 0.5]);

  useEffect(()=>{
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  });

   return (
      <div id="App">
        <VolumeContext.Provider value={[volume, setVolume]}>
          <Loading App={<Intro/>} />
        </VolumeContext.Provider>
        <audio id="bgm" loop={true} autoPlay={true} volume={volume[0]}/>
        <div id="effect" className={volume[1]}/>
      </div>
    );
};