import { useState } from "react";

import Nav from "components/Nav";
import MoveUI from "components/MoveUI";
import Dialogue from "components/DialogueUI/Dialogue";

export default ({ chapter }) => {
  const [dialogueData, setDialogueData] = useState({
    idx: chapter,
    scene: "0",
    flag: "0",
    index: "0",
  });
  const [dialogueDisabled, setDialogueDisabled] = useState(true);

  return (
    <>
      <Nav />
      <MoveUI
        chapter={chapter}
        onTalk={(data) => {
          setDialogueData(data);
          setDialogueDisabled(false);
        }}
        dialogueDisabled={dialogueDisabled}
      />
      {dialogueDisabled || (
        <Dialogue {...dialogueData} onClose={() => setDialogueDisabled(true)} />
      )}
    </>
  );
};

// 필요한 것
// <Dialogue idx(chapter?)={1} scene={0} onClose={func} disabled={false} />
//     chapter와 scene이 넘어가면 해당 대화내용 띄우기?
//        챕터 정보와 누구랑 어디에서 대화하는 지 정도만 넘겨줄 수 있음 다른 정보는 세션에서 (선녀옷 찾은 후라던가...)
//         + 대화가 끝나면 onClose 호출해줘야 함
//         -> props로 disabled가 true면 대화창 안보이기
//
