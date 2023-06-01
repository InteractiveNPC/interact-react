import { useState } from "react";
import { divToImg } from "services/propsFormat";

import { text } from "./config";

import styles from "./style.module.scss";

const img_base = "/image/Help/help/";

export default ({ onClose }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div
      className={styles.window}
      {...divToImg(img_base + "Help_background.png")}
    >
      <div className={styles.nav}>
        {text.map(({ title }, i) => {
          return (
            <div
              key={`help_nav_${i}`}
              className={idx === i ? styles.selected : null}
              onClick={() => setIdx(i)}
            >
              {title}
              {idx === i && (
                <img
                  key={`help_click_${i}`}
                  src={`${process.env.PUBLIC_URL + img_base}Help_click.png`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{text[idx].title}</div>
        <img src={process.env.PUBLIC_URL + img_base + text[idx].img} />
        <div className={styles.contentText}>{text[idx].content}</div>
      </div>
      <img
        className={styles.close}
        src={`${process.env.PUBLIC_URL + img_base}Help_X.png`}
        onClick={onClose}
      />
    </div>
  );
};
