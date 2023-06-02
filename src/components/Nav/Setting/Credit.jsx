import { credit } from "./config";
import styles from "./style.module.scss";

const img_base = "/image/Help/setting-credit/";

export default () => {
  return (
    <div className={styles.credit}>
      {credit.map((data, i) => (
        <p key={`crefit${i}`}>
          <div className={styles.title}>
            <img src={`${process.env.PUBLIC_URL + img_base}Setting_name.png`} />
            {data.title}
          </div>
          <div className={styles.content}>
            {data.content.map((words, j) => (
              <div key={`words${i}_${j}`}>
                {words.map((word, k) => (
                  <span key={`word${i}_${j}_${k}`}>{word}</span>
                ))}
              </div>
            ))}
          </div>
        </p>
      ))}
    </div>
  );
};
