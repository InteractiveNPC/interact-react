import { useState } from "react";
import { indictComponent } from "./config";
import { divToImg } from "../../../services/propsFormat";

import styles from "./style.module.scss";
import { useBGM } from "../../../services/audioManager";

export default ({ chapter }) => {
  useBGM("March_swish");

  const [idx, setIdx] = useState(0);
  const Indict = indictComponent[chapter][idx];

  return (
    <div className={styles.background}>
      <Indict />
      <div className={styles.nav}>
        {["공소사건 01", "공소사건 02", "공소사건 03"].map((title, i) => 
          <div key={title} onClick={() => setIdx(i)}
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
        <img className={styles.prev} onClick={()=>setIdx(idx-1)} src="/image/Paper/paper_make/UI/paper_make_prev_page.png"/>}
        {idx < indictComponent[chapter].length - 1 && 
          <img className={styles.next} onClick={()=>setIdx(idx+1)} src="/image/Paper/paper_make/UI/paper_make_next_page.png"/>}
      </div>
    </div>
  );
};
