import { divToImg } from "../../services/propsFormat";
import Find from "../../pages/Find";

import styles from "./style.module.scss";

const BackgroundImgBase =
  "/image/investigation/Talk/Background/FairyNWoodcutter/";
const fullWebpBase =
  process.env.PUBLIC_URL +
  "/image/investigation/Talk/Source/FairyNWoodcutter/full/full_";
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
          {...divToImg(
            BackgroundImgBase + "illust_FairyNWoodcutter_office_back.png"
          )}
        />
        <div
          className={styles.desk}
          {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_desk.png")}
        />
      </div>
    );
  },
  // 나무꾼의 집
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "FairyNWoodcutter_House.png")}
      >
        <img
          src={fullWebpBase + "Woodcutter.webp"}
          {...setPos(468, 562)}
          onClick={() => {
            onTalk({ idx: "1", scene: "3", flag: "0", index: "0" });
          }}
        />
        <img
          src={fullWebpBase + "Woodcutter_Mother.webp"}
          {...setPos(1330, 605)}
          onClick={() => {
            onTalk({ idx: "1", scene: "1", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
  // 나무꾼의 방 (증거 찾기)
  ({ onTalk, goOffice }) => {
    return <Find goOffice={goOffice} />;
  },
  // 연못
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_pond.png")}
      >
        <img
          src={fullWebpBase + "Deer.webp"}
          {...setPos(1190, 539)}
          onClick={() => {
            onTalk({ idx: "1", scene: "5", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
  // 천계
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_Heaven.png")}
      >
        <img
          src={fullWebpBase + "Fairy_Sister.webp"}
          {...setPos(744, 493)}
          onClick={() => {
            onTalk({ idx: "1", scene: "7", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
];
