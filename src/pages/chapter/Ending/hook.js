import { useState, useEffect } from "react";
import axios from "axios";
import { endingDialog } from "./config";

const getCourtResult = (tale) => {
  return new Promise((resolve) =>
    axios
      .get(`/court/${tale}`)
      .then(({ data }) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        resolve();
      })
  );
};

export const useCourtData = (chapter) => {
  const [data, setData] = useState(null);
  const [dialogueData, setDialogueData] = useState({});

  useEffect(() => {
    (async () => {
      if (!data) {
        const data = await getCourtResult(chapter);
        console.log(data);
        setData(data);

        const result = data.reduce((acc, cur) => acc + (cur.guilty ? 0 : 1), 0);

        setDialogueData(endingDialog[chapter][result]);
        console.log(dialogueData);
      }
    })();
  });

  return [data, dialogueData];
};

export const setButtonEvent = (target, src) => {
  target.onmousedown = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_click.png)`);
  target.onmouseup = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_normal.png)`);

  target.style.backgroundImage = `url(${
    process.env.PUBLIC_URL + src
  }_normal.png)`;
};
