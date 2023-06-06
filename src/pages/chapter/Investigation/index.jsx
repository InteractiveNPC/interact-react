import { useState, useContext, useEffect } from "react";
import MoveUI from "../../../components/MoveUI";
import Dialogue from "../../../components/DialogueUI/Dialogue";
import { divToImg } from "services/propsFormat";

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
  const [process, setProcess] = useState(0);

  const [ bHelpDisabled, setbHelpDisabled ] = useState(true);
  const settingbHelpDisabled=()=>{
    setbHelpDisabled(!bHelpDisabled);
  };
  const [who, setWho] = useState('temp');

  useEffect(() => {
    if (process == 0 && chapterContext[chapter]) {
      settingbHelpDisabled();
      setHeroDisabled(false);
      setProcess(2);
    }
  });

  return (
    <>
    { (process < 2  && !chapterContext[chapter]) &&
      <>
         <MoveUI
          chapter={chapter}
          disabled={true}
          hero={heroDisabled}
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
            <div>
              <Dialogue {...dialogueData}
              onInit={() => {
                setHeroDisabled(false);
              }}
              onClose={() => {
                console.log("close!!!!");
                if(chapter==1)
                  setWho('선녀');
                else setWho('홍련');
                setDialogueDisabled(true);
                setProcess(2);
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
          onTalk={(data) => {
            console.log("Talkkkkkkk!");
            setDialogueData(data);
            setDialogueDisabled(false);
          }}
          dialogueDisabled={dialogueDisabled}
          hero={heroDisabled}
          moveRecord={moveRecord}
        />
        {dialogueDisabled || (
          <div>
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
            <div id='dia' className="display-none">
            <Dialogue {...dialogueData}
              onInit={() => setHeroDisabled(false)}
              onClose={() => setDialogueDisabled(true)} />
            </div>
          </div>
        )}
      </>
    }
    </>
  );
};