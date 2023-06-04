import { useState } from "react";
import { divToImg } from "../../../services/propsFormat";

import Audio from "./Audio";
import Info from "./Info";

import { credit, reference } from "./config";

import styles from "./style.module.scss";

const img_base = "/image/Help/setting-credit/";

export default ({ onClose, volume, setVolume }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div
      className={styles.window}
      {...divToImg(img_base + "Setting_background.png")}
    >
      <div className={styles.nav}>
        {["오디오", "크레딧", "참고자료"].map((val, i) => (
          <div
            key={`setting_nav_${i}`}
            className={idx === i && styles.selected}
            onClick={() => setIdx(i)}
          >
            {val}
            <img
              src={`${process.env.PUBLIC_URL + img_base}Setting_${
                idx === i ? "normal" : "click"
              }.png`}
            />
          </div>
        ))}
      </div>
      {idx === 0 && <Audio volume={volume} setVolume={setVolume} />}
      {idx === 1 && <Info datas={credit}/>}
      {idx === 2 && <Info datas={reference}/>}
      <img
        className={styles.close}
        src={`${process.env.PUBLIC_URL + img_base}Setting_X.png`}
        onClick={onClose}
      />
    </div>
  );
};
