import { useState } from "react";
import { divToImg } from "../../services/propsFormat";

import Find3 from "pages/Find3";
import Find3_2 from "pages/Find3_2";

import styles from "./style.module.scss";

const BackgroundImgBase = "/image/Investigation/Talk/Background/TwoSisters/";
const fullWebpBase = "/image/Investigation/Talk/Source/TwoSisters/full/full_";
const halfWebpBase = "/image/Investigation/Talk/Source/TwoSisters/half/half_";
const setPos = (x, y) => {
  return { style: { left: `${x}px`, top: `${y}px` } };
};
const setPosWithIdx = (x, y, idx) => {
  return { style: { left: `${x}px`, top: `${y}px`, "zIndex": `${idx}` } };
};

export default [
  // 수사실
  ({ onTalk, hero }) => {
    const [heroDisabled, setHeroDisabled] = useState(hero);
    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_TwoSisters_office_back.mp4`}
            type="video/mp4"
          />
        </video>
        {heroDisabled ? null : (
          <img
            src={halfWebpBase + "Hongryeon_normal_X_office.webp"}
            {...setPosWithIdx(0, 0, 1000)}
            onClick={() => {
              setHeroDisabled(true);
              onTalk({ idx: "1", scene: "-1", "flag": "0", index: "0" });
            }}
          />
        )}
        <div
          className={styles.desk}
          {...divToImg(BackgroundImgBase + "illust_TwoSisters_desk.png")}
        />
      </div>
    );
  },
  // 장화홍련의 집
  ({ onTalk }) => {
    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_TwoSisters_TwoSisters_home.mp4`}
            type="video/mp4"
          />
        </video>
        <img
          src={fullWebpBase + "Mrs.Heo.webp"}
          {...setPos(645, 607)}
          onClick={() => {
            onTalk({ idx: "3", scene: "1", flag: "0", index: "0" });
          }}
        />
        <img
          src={fullWebpBase + "Jangsoe.webp"}
          {...setPos(1181, 613)}
          onClick={() => {
            onTalk({ idx: "3", scene: "3", flag: "0", index: "0" });
          }}
        />
        <img
          src={fullWebpBase + "Mr.Bae.webp"}
          {...setPos(1508, 607)}
          onClick={() => {
            onTalk({ idx: "3", scene: "5", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
  // 연못
  ({ onTalk, goOffice }) => {
    const [ disabled, setDisabled ] = useState(false);

    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_TwoSisters_pond.mp4`}
            type="video/mp4"
          />
        </video>
        <img
          src={fullWebpBase + "Tiger.webp"}
          {...setPos(594, 284)}
          onClick={() => {
            if(!disabled) {
              onTalk({ idx: "3", scene: "7", flag: "0", index: "0" });
            }
          }}
        />
        <Find3 goOffice={goOffice} setActive={setDisabled}/>
      </div>
    );
  },
  // 관아 밖
  ({ onTalk }) => {
    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_TwoSisters_police_outside.mp4`}
            type="video/mp4"
          />
        </video>
        <img
          src={fullWebpBase + "Maid.webp"}
          {...setPos(720, 620)}
          onClick={() => {
            onTalk({ idx: "3", scene: "9", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
  // 관아 안
  ({ onTalk, moveDocument }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_TwoSisters_police_room.png")}
      >
        <Find3_2 moveDocument={moveDocument}/>
      </div>
    );
  },
];
