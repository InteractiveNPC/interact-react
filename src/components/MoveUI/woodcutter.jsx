import { useState } from "react";
import { divToImg } from "../../services/propsFormat";
import Find from "../../pages/Find";
import Bhelp from '../../pages/Help';
import $ from "jquery";

import styles from "./style.module.scss";

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

const setZIndex = (idx) => {
  return {style: {"zIndex": `${idx}`}};
}

export default [
  // 수사실
  ({ onTalk, hero }) => {
    const [heroDisabled, setHeroDisabled] = useState(hero);
    const [ bHelpDisabled, setbHelpDisabled ] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    console.log(hero);
    return (
      <div className={styles.location}>
        <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
        <video muted autoPlay loop playsInline>
          <source
            src={`${
              process.env.PUBLIC_URL + BackgroundImgBase
            }illust_FairyNWoodcutter_office_back.mp4`}
            type="video/mp4"
          />
        </video>
        {heroDisabled ? null : (
          <div style={{backgroundColor: 'aqua'}}>
          <img
            src={halfWebpBase + "Fairy_normal_X_office.webp"}
            {...setPosWithIdx(0, 0, 1000)}
            onClick={() => {
              onTalk({ idx: "1", scene: "-1", "flag": "0", index: "0" });
            }} onMouseOver={()=>{
              $('div#bHelp').fadeIn(2000);
              setTimeout(()=>{$('div#bHelp').removeClass('display-none');}, 1000);
            }}
          />
          </div>
        )}
        <div
          className={styles.desk}
          {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_desk.png")}
        />
        <div id='bHelp' className="display-none" style={{zIndex:'1000'}}
        onClick={()=>{
          if(clickCount>=3){
            //setTimeout(()=>{$('div#bHelp').addClass('display-none');},1000);
            $('div#bHelp').css('zIndex','500');
          }
          else
            setClickCount(clickCount + 1);
        }}>
          {bHelpDisabled? <Bhelp who={'선녀'} /> : null}
        </div>
      </div>
    );
  },
  // 나무꾼의 집
  ({ onTalk }) => {
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
    return (
      <div className={styles.location}
        {...divToImg(BackgroundImgBase + "illust_FairyNWoodcutter_Woodcutter_room.png")}
        >
        <Find goOffice={goOffice} />
      </div>
    );
  },
  // 연못
  ({ onTalk }) => {
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
