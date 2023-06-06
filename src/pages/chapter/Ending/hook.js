import { useState, useEffect } from "react";
import axios from "axios";
import { endingDialog } from "./config";

export const getCourtResult = (tale) => {
  return new Promise((resolve) =>
    axios
      .get(`/court/${tale}`)
      .then(({ data }) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        resolve([]);
      })
  );
};

export const resetChapterSession = (chapter) => {
  return new Promise((resolve) =>
    axios
      .get(`/reset/${chapter}`)
      .then(({ data }) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        resolve();
      })
  );
}

export const useCourtData = (chapter) => {
  const [data, setData] = useState(null);
  const [dialogueData, setDialogueData] = useState({});
  let result = 0;

  useEffect(() => {
    (async () => {
      if (!data) {
        const data = await getCourtResult(chapter);
        setData(data);

        const guiltyN = data.reduce((acc, cur) => acc + (cur.guilty ? 1 : 0), 0);
        if(guiltyN === 0) result = 1;
        if(guiltyN === 1 || guiltyN === 2) result = 2;
        if(guiltyN === 3) result = 3;
        setDialogueData(endingDialog[chapter][result]);
      }
    })();
  });

  return [data, dialogueData, result];
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
