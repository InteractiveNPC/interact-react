import axios from "axios";
import { useState, useEffect } from "react";

const getCourtResult = (tale) => {
  return new Promise((resolve) =>
    axios
      .get(`/courtresult/${tale}`)
      .then(({ data }) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        resolve({});
      })
  );
};

export const useCourtResult = (tale) => {
  const [idx, setIdx] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    (async () => {
      const resultList = await getCourtResult(tale);
      setResult(resultList[idx]);
    })();
  });

  return [
    result,
    (move) => {
      const newIdx = idx + move;
      if (newIdx >= 0 && newIdx < 3) setIdx(idx + move);
    },
  ];
};
