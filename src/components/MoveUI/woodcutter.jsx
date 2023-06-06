import { useState } from "react";
import { useHaveItem, meet_character } from "./config";
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
    const have = useHaveItem("선녀옷");
    const [heroDisabled, setHeroDisabled] = useState(hero);
    $("#hero").bind("hero", function() {
      setHeroDisabled(false);
    });
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
          
          {!heroDisabled && (
            <div>
              <img
                src={halfWebpBase + "Fairy_normal_X_office.webp"}
                {...setPosWithIdx(0, 0, 1000)}
                onClick={() => {
                  const scene = have ? "-2" : "-1";
                  setHeroDisabled(true);
                  onTalk({ idx: "1", scene: scene, "flag": "0", index: "0" });
                }}
              />
            </div>
          )}
          <div
            id="hero"
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
            meet_character(1, 3);
            onTalk({ idx: "1", scene: "3", flag: "0", index: "0" });
          }}
        />
        <img
          src={fullWebpBase + "Woodcutter_Mother.webp"}
          {...setPos(1330, 605)}
          onClick={() => {
            meet_character(1, 2);
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
        <Find
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
            meet_character(1, 4);
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
            meet_character(1, 5);
            onTalk({ idx: "1", scene: "7", flag: "0", index: "0" });
          }}
        />
      </div>
    );
  },
];
