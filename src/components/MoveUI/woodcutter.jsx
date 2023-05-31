import { divToImg } from "services/propsFormat";
import Find from "pages/Find";

import styles from "./style.module.scss";

const BackgroundImgBase =
  "/image/investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_";
const fullWebpBase =
  process.env.PUBLIC_URL +
  "/image/investigation/Talk/Source/FairyNWoodcutter/full/full_";
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
        {...divToImg(BackgroundImgBase + "Woodcutter_outside.png")}
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
  ({ onTalk }) => {
    return <Find />;
  },
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "pond.png")}
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
  ({ onTalk }) => {
    return (
      <div
        className={styles.location}
        {...divToImg(BackgroundImgBase + "Heaven.png")}
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
