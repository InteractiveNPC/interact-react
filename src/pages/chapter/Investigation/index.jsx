import { useState } from "react";
import MoveUI from "../../../components/MoveUI";
import Dialogue from "../../../components/DialogueUI/Dialogue";
import { divToImg } from "services/propsFormat";

import styles from "./style.module.scss";

export default ({ chapter, moveDocument }) => {
  const [dialogueData, setDialogueData] = useState({
    idx: chapter,
    scene: "0",
    flag: "0",
    index: "0",
  });
  const [heroDisabled, setHeroDisabled] = useState(true);
  const [dialogueDisabled, setDialogueDisabled] = useState(false);
  const [process, setProcess] = useState(0);

  return (
    <>
    { process < 2 &&
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
            {dialogueDisabled || (
              <Dialogue {...dialogueData}
                onInit={() => {
                  setHeroDisabled(false);
                }}
                onClose={() => {
                  console.log("close!!!!");
                  setDialogueDisabled(true);
                  setProcess(2);
                }}
              />
            )}
          </>
        }
      </>
    }
    { process === 2 && 
      <>
        <MoveUI
          chapter={chapter}
          onTalk={(data) => {
            setDialogueData(data);
            setDialogueDisabled(false);
          }}
          dialogueDisabled={dialogueDisabled}
          hero={heroDisabled}
          moveDocument={moveDocument}
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