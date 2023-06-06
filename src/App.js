import { useState, useEffect } from "react";
import { ContextProvider } from "./contexts";
import { getResizeEventListener } from "./services/responsiveFrame";
import Document from "pages/chapter/Document";
import Intro from "./components/IntroUI/Intro";


import Loading from "./components/Loading";

export default () => {
  const [volume, setVolume] = useState([0.5, 0.5, 0.5]);
  const [chapter, setChapter] = useState({ 1: false, 3: false });

  useEffect(()=>{
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  });

   return (
      <div id="App">
        <ContextProvider volumeData={[volume, setVolume]} chapterData={[chapter, setChapter]}>
        <Loading App={<Document chapter={1}/>} />
        </ContextProvider>
        <audio id="bgm" loop={true} autoPlay={true} volume={volume[0]}/>
        <div id="effect" className={volume[1]}/>
      </div>
    );
};
