import { useState } from "react";
import { indictComponent } from "./config";
import { divToImg } from "../../../services/propsFormat";

import styles from "./style.module.scss";
import { useBGM, effectPlay } from "../../../services/audioManager";

import Indict_Result1 from "pages/indict_result/index";
import Indict_Result3 from "pages/indict_result/index2";

import { getCourtResult } from "../Ending/hook";

export default ({ chapter, onSubmit }) => {
  useBGM("March_swish");

  const [idx, setIdx] = useState(0);
  const [process, setProcess] = useState(0);
  const [warning, setWarning] = useState(false);

  const Indict = indictComponent[chapter][idx];

  return (
    <div className={styles.background}>
      { process === 0 &&
        <>
        <Indict onSubmit={async () => {
          // if((await getCourtResult(chapter)).length > 0)
           setProcess(1);
          // else setWarning(true);
        }}/>
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
        {warning && 
          <div className={styles.warning}
            {...divToImg("/image/Notice/proof_find_info_background.png")}>
              <div className={styles.content}>적어도 하나의 사건에 대해 기소해주세요.</div>
              <div className={styles.button} onClick={()=>setWarning(false)}>확인</div>
          </div>}
        </>
      }
      { process === 1 && 
        <>
          { chapter === 1 && <Indict_Result1 chapter={chapter} onPrev={() => setProcess(0)} onSubmit={onSubmit} />}
          { chapter === 3 && <Indict_Result3 chapter={chapter} onPrev={() => setProcess(0)} onSubmit={onSubmit} />}
        </>
      }
    </div>
  );
};
