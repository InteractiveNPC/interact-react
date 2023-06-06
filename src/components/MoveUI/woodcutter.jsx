import { useState } from "react";
import { useHaveItem } from "./config";
import { divToImg } from "../../services/propsFormat";
import Find from "../../pages/Find";
import $ from 'jquery';


import styles from "./style.module.scss";
import { useBGM } from "../../services/audioManager";

const BackgroundImgBase =
  "/image/Investigation/Talk/Background/FairyNWoodcutter/";
const fullWebpBase =
  process.env.PUBLIC_URL +
  "/image/Investigation/Talk/Source/FairyNWoodcutter/full/full_";
const halfWebpBase = 
  process.env.PUBLIC_URL +
  "/image/Investigation/Talk/Source/FairyNWoodcutter/half/half_";
const setPos = (x, y) => {
  return { style: { left: `${x}px`, top: `${y}px` } };
};
const setPosWithIdx = (x, y, idx) => {
  return { style: { left: `${x}px`, top: `${y}px`, "zIndex": `${idx}`, "position": "absolute" } };
};

export default [
  // 수사실
  ({ onTalk, hero }) => {
    useBGM("NakhwaNansangji");

    const [heroDisabled, setHeroDisabled] = useState(hero);
    console.log(hero);
    return (
      <div className={styles.location}>
          <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_FairyNWoodcutter_office_back.mp4`}
            type="video/mp4"
          />
          </video>
          
          {heroDisabled ? null : (
            <div>
              <img
                src={halfWebpBase + "Fairy_normal_X_office.webp"}
                {...setPosWithIdx(0, 0, 1000)}
                onClick={() => {
                  onTalk({ idx: "1", scene: "-1", "flag": "0", index: "0" });
                }}
              />
            </div>
          )}
          <div
            className={styles.desk}
            {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_desk.png")}
          />
      </div>
    );
  },
  // 나무꾼의 집
  ({ onTalk }) => {
    useBGM("spring_reunion");

    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }FairyNWoodcutter_House.mp4`}
            type="video/mp4"
          />
        </video>
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
    useBGM("spring_reunion");
    const have = useHaveItem("선녀옷");

    return (
      <div className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_Woodcutter_room.png")}
        >
        {have || 
        <Find style={{zIndex:'3000'}}
          goOffice={() => {
            onTalk({ idx: "1", scene: "-2", flag: "0", index: "0" });
            goOffice();
          }}/>}
      </div>
    );
  },
  // 연못
  ({ onTalk }) => {
    useBGM("spring_reunion");
    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_FairyNWoodcutter_pond.mp4`}
            type="video/mp4"
          />
        </video>
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
    useBGM("spring_reunion");
    return (
      <div className={styles.location}>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_FairyNWoodcutter_Heaven.mp4`}
            type="video/mp4"
          />
        </video>
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
