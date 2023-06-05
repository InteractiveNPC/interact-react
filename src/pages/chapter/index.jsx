import { useState } from "react";

import Nav from "../../components/Nav";

import Investigation from "./Investigation";
import Document from "./Document";
import Ending from "./Ending";
import Home from "components/HomeUI/Home";

import { resetChapterSession } from "./Ending/hook";

export default ({ chapter, volume, setVolume }) => {
  const [process, setProcess] = useState(0);

  return (
    <>
      {process === -1 ? (
        <Home />
      ) : (
        <>
          <Nav
            moveDocument={() => setProcess(1)}
            displayNote={() => setProcess(2)}
            goHome={async () => {
              await resetChapterSession(chapter);
              setProcess(-1);
            }}
            volume={volume}
            setVolume={setVolume}
            ending={process === 2}
          />
          {process === 0 && (
            <Investigation
              chapter={chapter}
              moveDocument={() => setProcess(1)}
            />
          )}
          {process === 1 && <Document chapter={chapter} />}
          {process === 2 && (
            <Ending
              chapter={chapter}
              replay={async () => {
                await resetChapterSession(chapter);
                setProcess(0);
              }}
              goHome={async () => {
                await resetChapterSession(chapter);
                setProcess(-1);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

// 필요한 것
// <Dialogue idx(chapter?)={1} scene={0} onClose={func} />
//     chapter와 scene이 넘어가면 해당 대화내용 띄우기?
//        챕터 정보와 누구랑 어디에서 대화하는 지 정도만 넘겨줄 수 있음 다른 정보는 세션에서 (선녀옷 찾은 후라던가...)
//         + 대화가 끝나면 onClose 호출해줘야 함
//
