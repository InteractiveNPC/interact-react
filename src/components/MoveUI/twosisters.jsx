import { divToImg } from "services/propsFormat";

import styles from "./style.module.scss";

const BackgroundImgBase =
  "/image/investigation/Talk/Background/TwoSisters/illust_TwoSisters_";
const fullWebpBase = "/image/investigation/Talk/Source/TwoSisters/full/full_";
const setPos = (x, y) => {
  return { style: { left: `${x}px`, top: `${y}px` } };
};

export default [
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "office.png")}
      ></div>
    );
  },
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "TwoSisters_home.png")}
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "pond.png")}
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "police_outside.png")}
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "police_room.png")}
      >
        관아 밖
      </div>
    );
  },
];
