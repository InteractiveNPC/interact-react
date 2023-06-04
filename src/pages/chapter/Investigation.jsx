import { useState } from "react";
import MoveUI from "../../components/MoveUI";
import Dialogue from "../../components/DialogueUI/Dialogue";

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
    { process === 0 && 
      <>
        <MoveUI chapter={chapter} disabled={true} hero={heroDisabled}/>
        {dialogueDisabled || (
          <Dialogue {...dialogueData}
          onInit={() => {
            setHeroDisabled(false);
          }}
          onClose={() => {
            console.log("close!!!!");
            setDialogueDisabled(true);
            setProcess(1);
          }} />
        )}
      </>}
      { process === 1 && 
      <>
        <MoveUI
          chapter={chapter}
          onTalk={(data) => {
            setDialogueData(data);
            setDialogueDisabled(false);
          }}
          dialogueDisabled={dialogueDisabled}
          moveDocument={moveDocument}
        />
        {dialogueDisabled || (
          <Dialogue {...dialogueData} onClose={() => setDialogueDisabled(true)} />
        )}
      </>}
    </>
  );
};