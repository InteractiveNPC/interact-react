import styles from "./style.module.scss";

const img_base = "/image/Help/setting-credit/";

export default ({datas}) => {
  return (
    <div className={styles.info}>
      {datas.map((data, i) => (
        <p key={`info${i}_${data}`}>
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
