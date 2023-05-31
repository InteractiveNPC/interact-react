import { useState } from "react";
// import { useLoaderData } from "react-router";

import { divToImg } from "services/propsFormat";

import styles from "./style.module.scss";

export default ({ data }) => {
  if (!data) return <></>;

  const [idx, setIdx] = useState(0);

  return (
    <div className={styles.court} {...divToImg("/image/Court/background.png")}>
      <div className={styles.window} {...divToImg("/image/Court/window.png")}>
        <div className={styles.title}>
          <div>{data[idx].title}</div> <hr /> <div>{data[idx].crime.title}</div>
        </div>
        <div className={styles.result}>
          {data[idx].crime.article}{" "}
          <span className={styles.crime}>{data[idx].crime.title}</span>에 근거해
          <br />
          {data[idx].defandant}에게{" "}
          {data[idx].guilty ? (
            <span className={styles.guilty}>유죄</span>
          ) : (
            <span className={styles.notguilty}>무죄</span>
          )}
          를 선고한다.
        </div>
        <div className={styles.reason}>
          <div className={styles.title}>판결 이유</div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: data[idx].reason,
            }}
          ></div>
        </div>
        <div className={styles.crimeInfo}>
          {data[idx].crime.article} {data[idx].crime.info}
        </div>
        <div className={styles.nav}>
          <div
            {...divToImg("/image/Court/arrow_left.png")}
            onClick={() => {
              if (idx > 0) setIdx(idx - 1);
            }}
          />
          <div
            {...divToImg("/image/Court/arrow_right.png")}
            onClick={() => {
              if (idx < data.length - 1) setIdx(idx + 1);
            }}
          />
        </div>
      </div>
      <div
        className={styles.next}
        {...divToImg("/image/Court/next_button.png")}
        onClick={() => alert("끝~~~~~!")}
      />
    </div>
  );
};
