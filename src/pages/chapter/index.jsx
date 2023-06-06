import { useState } from "react";

import Nav from "../../components/Nav";

import Investigation from "./Investigation";
import Document from "./Document";
import Ending from "./Ending";
import Home from "components/HomeUI/Home";
import Record1 from "../eventRecord1";
import Record3 from "../eventRecord2";

export default ({ chapter }) => {
  const [process, setProcess] = useState(0);
  const [document, setDocument] = useState(false);
  const [record, setRecord] = useState(false);

  return ( 
    <>
      {process === -1 ? (
        <Home />
      ) : (
        <>
          <Nav
            moveDocument={() => {
              if(!record) setDocument(!document);
            }}
            moveRecord={() => {
              if(!document) setRecord(!record);
            }}
            goHome={() => setProcess(-1)}
            ending={process === 1}
            document={document}
            record={record}
          />
          {(process === 0 && !record) && (
            <Investigation
              chapter={chapter}
              moveRecord={() => setRecord(true)}
            />
          )}
          {process === 1 && (
            <Ending
              chapter={chapter}
              replay={() => setProcess(0)}
            />
          )}
          {document && <Document chapter={chapter} onSubmit={() => setProcess(1)}/>}
          {record && 
            <>
              {chapter === 1 && <Record1/>}
              {chapter === 3 && <Record3/>}
            </>
          }
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
