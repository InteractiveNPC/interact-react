import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { divToImg } from "services/propsFormat";

import Help from "./Help";
import Setting from "./Setting";

import { setButtonEvent } from "./animation";
import index_styles from "./style.module.scss";

export default () => {
  const navigate = useNavigate();

  const [window, setWindow] = useState(null);
  const button = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const navEvent = [
    () => navigate("/home"),
    () => setWindow("help"),
    () => setWindow("setting"),
    () => alert("수사 기록으로 이동!"),
    () => navigate("/document"),
  ];

  useEffect(() => {
    navEvent.slice(1).forEach((e, idx) => (button[idx].current.onclick = e));

    setButtonEvent(button[0].current, "/image/Nav/Help");
    setButtonEvent(button[1].current, "/image/Nav/Setting");
    setButtonEvent(button[2].current, "/image/Nav/Investigation");
    setButtonEvent(button[3].current, "/image/Nav/IndictPage");
  });

  return (
    <>
      <div
        className={index_styles.home}
        {...divToImg("/image/Nav/HomeButton.png")}
        onClick={navEvent[0]}
      ></div>
      <div className={index_styles.buttons1}>
        <div ref={button[0]} />
        <div ref={button[1]} />
      </div>
      <div className={index_styles.buttons2}>
        <div ref={button[2]} />
        <div ref={button[3]} />
      </div>
      {window === "help" && <Help closeEvent={() => setWindow(null)} />}
      {window === "setting" && <Setting closeEvent={() => setWindow(null)} />}
    </>
  );
};
