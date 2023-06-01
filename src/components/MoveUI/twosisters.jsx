import { divToImg } from "services/propsFormat";

import styles from "./style.module.scss";

const BackgroundImgBase = "/image/investigation/Talk/Background/TwoSisters/";
const fullWebpBase = "/image/investigation/Talk/Source/TwoSisters/full/full_";
const setPos = (x, y) => {
  return { style: { left: `${x}px`, top: `${y}px` } };
};

export default [
  // 수사실
  ({ onTalk }) => {
    return (
      <div className={styles.location}>
        <div
          className={styles.background}
          {...divToImg(BackgroundImgBase + "illust_TwoSisters_office_back.png")}
        />
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
      <div
        className={styles.location}
        {...divToImg(
          BackgroundImgBase + "illust_TwoSisters_TwoSisters_home.png"
        )}
      >
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_TwoSisters_pond.png")}
      >
        <img
          src={fullWebpBase + "Tiger.webp"}
          {...setPos(594, 284)}
          onClick={() => {
            onTalk({ idx: "3", scene: "7", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
  // 관아 밖
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(
          BackgroundImgBase + "illust_TwoSisters_police_outside.png"
        )}
      >
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_TwoSisters_police_room.png")}
      >
        관아 밖
      </div>
    );
  },
];
