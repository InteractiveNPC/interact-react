import { useEffect, useRef, useState } from "react";

import { divToImg } from "../../services/propsFormat";
import { existNewNode } from "../Record/hook";

import Help from "./Help";
import Setting from "./Setting";

import { setButtonEvent } from "./animation";
import index_styles from "./style.module.scss";

const img_base = "/image/Investigation/Talk/UI/";

export default ({ home, ending, document, record, moveDocument, moveRecord, goHome }) => {
  const [window, setWindow] = useState(null);
  const button = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const navEvent = [
    home ? ()=>{} : goHome,
    (home || ending) ? ()=>{} : moveRecord,
    (home || ending) ? ()=>{} : moveDocument,
    () => {
      window === "help" ? setWindow(null) : setWindow("help");
    },
    () => {
      window === "setting" ? setWindow(null) : setWindow("setting");
    },
  ];

  useEffect(() => {
    navEvent.slice(1).forEach((e, idx) => (button[idx].current.onclick = e));

    if(!home && !ending) {
      if(!record) {
        setButtonEvent(button[0].current, img_base + "UI_record");

        // (async () => {
        //   if(await existNewNode(chapter)) {
            
        //   }
        // })();
      }
      else {
        setButtonEvent(button[0].current, false);
        button[0].current.style.backgroundImage = `url(${
          process.env.PUBLIC_URL + img_base}UI_record_click.png)`;
      }
      
      if(!document) setButtonEvent(button[1].current, img_base + "UI_paper_make");
      else {
        setButtonEvent(button[1].current, false);
        button[1].current.style.backgroundImage = `url(${
          process.env.PUBLIC_URL + img_base}UI_paper_make_click.png)`;
      }
    }
    else {
      setButtonEvent(button[0].current, false);
      setButtonEvent(button[1].current, false);
    }
    
    if(window === "help") {
      setButtonEvent(button[2].current, false);
      button[2].current.style.backgroundImage = `url(${
        process.env.PUBLIC_URL + img_base}UI_help_click.png)`;
    } else {
      setButtonEvent(button[2].current, img_base + "UI_help");
    }

    if(window == "setting") {
      setButtonEvent(button[3].current, false);
      button[3].current.style.backgroundImage = `url(${
        process.env.PUBLIC_URL + img_base}UI_setting_click.png)`;
    } else {
      setButtonEvent(button[3].current, img_base + "UI_setting");
    }
  });

  return (
    <>
      {home || <div
        className={index_styles.home}
        {...divToImg(img_base + "HomeButton.png")}
        onClick={navEvent[0]}
      ></div>}
      <div className={index_styles.buttons}>
        <div ref={button[0]} />
        <div ref={button[1]} />
        <div ref={button[2]} />
        <div ref={button[3]} />
      </div>
      {window === "help" && <Help onClose={() => setWindow(null)} />}
      {window === "setting" && (
        <Setting
          onClose={() => setWindow(null)}
        />
      )}
    </>
  );
};
