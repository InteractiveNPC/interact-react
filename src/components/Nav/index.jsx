import { useEffect, useRef, useState } from "react";

import { divToImg } from "services/propsFormat";

import Help from "./Help";
import Setting from "./Setting";

import { setButtonEvent } from "./animation";
import index_styles from "./style.module.scss";

const img_base = "/image/Investigation/Talk/UI/";

export default ({ moveDocument, displayNote, volume, setVolume }) => {
  const [window, setWindow] = useState(null);
  const button = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const navEvent = [
    () => alert("홈으로 이동!"),
    displayNote,
    moveDocument,
    () => {
      window === "help" ? setWindow(null) : setWindow("help");
    },
    () => {
      window === "setting" ? setWindow(null) : setWindow("setting");
    },
  ];

  useEffect(() => {
    navEvent.slice(1).forEach((e, idx) => (button[idx].current.onclick = e));

    setButtonEvent(button[0].current, img_base + "UI_record");
    setButtonEvent(button[1].current, img_base + "UI_paper_make");
    setButtonEvent(button[2].current, img_base + "UI_help");
    setButtonEvent(button[3].current, img_base + "UI_setting");
  });

  return (
    <>
      <div
        className={index_styles.home}
        {...divToImg(img_base + "HomeButton.png")}
        onClick={navEvent[0]}
      ></div>
      <div className={index_styles.buttons}>
        <div ref={button[0]} />
        <div ref={button[1]} />
        <div ref={button[2]} />
        <div ref={button[3]} />
      </div>
      {window === "help" && <Help onClose={() => setWindow(null)} />}
      {window === "setting" && (
        <Setting
          volume={volume}
          setVolume={setVolume}
          onClose={() => setWindow(null)}
        />
      )}
    </>
  );
};
