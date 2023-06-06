import { useState } from "react";
import { indictComponent } from "./config";
import { divToImg } from "../../../services/propsFormat";

import styles from "./style.module.scss";
import { useBGM, effectPlay } from "../../../services/audioManager";

import Indict_Result from "pages/indict_result";

export default ({ chapter, onSubmit }) => {
  useBGM("March_swish");

  const [idx, setIdx] = useState(0);
  const [process, setProcess] = useState(0);
  const Indict = indictComponent[chapter][idx];

  return (
    <div className={styles.background}>
      { process === 0 &&
        <>
        <Indict onSubmit={() => setProcess(1)}/>
        <div className={styles.nav}>
          {["공소사건 01", "공소사건 02", "공소사건 03"].map((title, i) => 
            <div key={title} onClick={() => {
              effectPlay("papernext");
              setIdx(i);
            }}
              className={idx === i ? styles.selected : ""} >
                <img 
                  src={idx === i 
                  ? "/image/Paper/Paper_make/UI/paper_make_click00.png" 
                  : "/image/Paper/Paper_make/UI/paper_make_normal00.png"}/>
                <div>{title}</div>
              </div>
          )}
        </div>
        <div className={styles.arrow_nav}>
          {idx > 0 && 
            <img 
              className={styles.prev} 
              onClick={()=> {
                effectPlay("papernext");
                setIdx(idx-1);
              }} 
              src="/image/Paper/Paper_make/UI/paper_make_prev_page.png"
            />}
          {idx < indictComponent[chapter].length - 1 && 
            <img 
              className={styles.next} 
              onClick={()=> {
                effectPlay("papernext");
                setIdx(idx+1);
              }} 
              src="/image/Paper/Paper_make/UI/paper_make_next_page.png"/>}
        </div>
        </>
      }
      { process === 1 && <Indict_Result chapter={chapter} onPrev={() => setProcess(0)} onSubmit={onSubmit} />}
    </div>
  );
};
