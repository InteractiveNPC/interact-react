import { useState } from "react";

import Nav from "../../components/Nav";

import Investigation from "./Investigation";
import Document from "./Document";
import Ending from "./Ending";
import Home from "components/HomeUI/Home";

export default ({ chapter, volume, setVolume, goHome }) => {
  const [process, setProcess] = useState(0);
  const [home, setHome] = useState(false);

  return (
    <>
      {home ? (
        <Home />
      ) : (
        <>
          <Nav
            moveDocument={() => setProcess(1)}
            displayNote={() => setProcess(2)}
            goHome={() => setHome(true)}
            volume={volume}
            setVolume={setVolume}
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
              replay={() => setProcess(0)}
              goHome={() => setHome(true)}
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
