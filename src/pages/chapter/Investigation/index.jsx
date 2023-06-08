import { useState, useContext, useEffect } from "react";
import axios from "axios";
import MoveUI from "../../../components/MoveUI";
import Dialogue from "../../../components/DialogueUI/Dialogue";
import { divToImg } from "services/propsFormat";
import { chapterProgressed } from "../Ending/hook";

import $ from "jquery";
import Bhelp from '../../Help';
import styles from "./style.module.scss";

import { ChapterContext } from "contexts";

export default ({ chapter, moveRecord }) => {
  const [chapterContext, setChapterContext] = useContext(ChapterContext);

  const [dialogueData, setDialogueData] = useState({
    idx: chapter,
    scene: "0",
    flag: "0",
    index: "0",
  });
  const [heroDisabled, setHeroDisabled] = useState(true);
  const [dialogueDisabled, setDialogueDisabled] = useState(true);
  const [process, setProcess] = useState(-1);

  const [ bHelpDisabled, setbHelpDisabled ] = useState(true);
  const settingbHelpDisabled=()=>{
    setbHelpDisabled(!bHelpDisabled);
    setProcess(3)
  };
  const [who, setWho] = useState('temp');

  useEffect(() => {
    if (process == -1){
      (async () => {
        if(await chapterProgressed(chapter)) {
          setHeroDisabled(false);
          setProcess(3);
        } else {
          setProcess(0);
          meet_character(chapter, 1);
        }
      })();
    }
  });

  return (
    <>
    { (process < 2) &&
      <>
         <MoveUI
          chapter={chapter}
          disabled={true}
          hero={true}
        />
        { process === 0 && 
          <div
            className={styles.background}
            onClick={() => {
              const info = document.querySelector(`.${styles.info}`);
              if(info) {
                info.className = styles.disappear;
              }
              setTimeout(() => {
                setProcess(1);
              }, 1000);
            }}
            >
            <div {...divToImg("/image/Home/UI/Home_Infomation.png")}
              className={styles.info}>
                수사실에 누군가 찾아왔습니다.
            </div>
          </div>
        }
        { process === 1 && 
          <>
            <div className={styles.background}>
              <Dialogue {...dialogueData}
              onInit={() => {
                setHeroDisabled(false);
              }}
              onClose={() => {
                if(chapter==1)
                  setWho('선녀');
                else setWho('홍련');
                setDialogueDisabled(true);
                setProcess(2);
                setHeroDisabled(false);
              }}
            />
            </div>
          </>
        }
        
      </>
    }
     { process === 2 && 
        <>
        <MoveUI
          chapter={chapter}
          disabled={true}
          hero={false}
        />
          <div className={styles.background}>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
              <div id='bHelp' style={{zIndex:'2000'}}
                onClick={()=>{
                  if(!bHelpDisabled){
                    $('div#bHelp').css('zIndex','500');
                    $('div#dia').removeClass('display-none');
                  }
              }}>
              {bHelpDisabled? <Bhelp who={who} setActive={settingbHelpDisabled} chapter={chapter} /> : null}
            </div>
          </div>
        </>  
    }
    { process === 3 && 
      <>
        <MoveUI
          chapter={chapter}
          onTalk={(data) => {
            setDialogueData(data);
            setDialogueDisabled(false);

          }}
          dialogueDisabled={dialogueDisabled}
          hero={heroDisabled}
          moveRecord={moveRecord}
          setDialogueDisabled={setDialogueDisabled}
        />
        {dialogueDisabled || (
          <Dialogue {...dialogueData}
            onInit={() => setHeroDisabled(false)}
            onClose={() => setDialogueDisabled(true)} />
        )}
      </>
    }
    </>
  );
};

const meet_character = (chapter, chapter_id) => {
  axios
  .get(`/meet/${chapter}/${chapter_id}`)
  .then((res) => {
    //console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
}