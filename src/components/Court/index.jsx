import { useEffect, useRef, useState } from "react";
// import { useLoaderData } from "react-router";

import { divToImg } from "../../services/propsFormat";
import { setButtonEvent } from "./animation";

import styles from "./style.module.scss";

const imgBase = "/image/Court/";

export default ({ data, onNext }) => {
  if (!data) return <></>;

  const [idx, setIdx] = useState(0);
  const buttonRef = useRef();

  useEffect(() => {
    const button = buttonRef.current;
    setButtonEvent(button, imgBase + "UI/Court_nextbutton");
  });

  return (
    <>
      <div
        className={styles.window}
        {...divToImg(imgBase + "UI/Court_result_background.png")}
      >
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
        <div className={styles.fade}>
          <img src={imgBase + "UI/Court_result_Rectangle_top.png"} />
          <img src={imgBase + "UI/Court_result_Rectangle_under.png"} />
        </div>
        <div className={styles.reason}>
          <br />
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
            {...divToImg(imgBase + "UI/Court_result_arrow_left.png")}
            onClick={() => {
              if (idx > 0) setIdx(idx - 1);
            }}
          />
          <div
            {...divToImg(imgBase + "UI/Court_result_arrow_right.png")}
            onClick={() => {
              if (idx < data.length - 1) setIdx(idx + 1);
            }}
          />
        </div>
      </div>
      <div className={styles.next} ref={buttonRef} onClick={onNext} />
    </>
  );
};
