import { useState, useRef, useEffect } from "react";
import { useCourtData, setButtonEvent, resetChapterSession, chapterProgressed } from "./hook";

import { divToImg } from "../../../services/propsFormat";

import Court from "../../../components/Court";
import Dialogue from "components/DialogueUI/Dialogue";

import styles from "./style.module.scss";
import { useBGM } from "../../../services/audioManager";
import Home from "components/HomeUI/Home";

export default ({ chapter, replay }) => {
  useBGM("Deneb");

  const [idx, setIdx] = useState(0);
  const [data, dialogueData, result] = useCourtData(chapter);
  const title = chapter === 1 ? "선녀와 나무꾼" : "장화 홍련";

  const buttonRef1 = useRef();
  const buttonRef2 = useRef();

  useEffect(() => {
    if (idx === 2) {
      setButtonEvent(
        buttonRef1.current,
        "/image/Notice/proof_find_info_button"
      );
      setButtonEvent(
        buttonRef2.current,
        "/image/Notice/proof_find_info_button"
      );

      (async () => {
        if(await chapterProgressed(chapter)) {
          resetChapterSession(chapter);
        }
      })();
    }
  });

  return (
    <>
      { idx === -1 
        ? <Home idx={chapter} res={result}/>
        : <div
            className={styles.court}
            {...divToImg("/image/Court/Background/Court_Background.png")}
          >
            {idx === 0 && <Court data={data} onNext={() => setIdx(1)} />}
            {idx === 1 && <Dialogue {...dialogueData} onClose={() => setIdx(2)} />}
            {idx === 2 && (
              <div
                className={styles.window}
                {...divToImg("/image/Notice/proof_find_info_background.png")}
              >
                <div className={styles.title}>
                  동화 '{title}'의 수사를 완료했습니다.
                </div>
                <div className={styles.content}>
                  다시 수사를 시작할 수 있고, 다른 동화를 수사할 수 있습니다.
                </div>
                <div className={styles.buttons}>
                  <div ref={buttonRef1} 
                    onClick={() => replay()}>
                    다시 수사하기
                  </div>
                  <div ref={buttonRef2} 
                    onClick={() => setIdx(-1)}>
                    수사 마치기
                  </div>
                </div>
              </div>
            )}
          </div>
      }
    </>
  );
};
