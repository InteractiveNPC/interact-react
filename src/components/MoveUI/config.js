import { useEffect, useState } from "react";
import axios from "axios";

import woodcutterLocs from "./woodcutter";
import twosistersLocs from "./twosisters";

export const locationNames = {
  1: ["수사실", "나무꾼의 집", "나무꾼의 방", "연못", "천계"],
  3: ["수사실", "장화홍련의 집", "연못", "관아 밖", "관아 안"],
};

export const locations = {
  1: woodcutterLocs,
  3: twosistersLocs,
};

export const useHaveItem = (itemName) => {
  const [item, setItem] = useState(false);

  useEffect(() => {
    (async () => {
      let have;
      if(itemName === "선녀옷") {
        have = await session_item(1, 6);
      }
      if(itemName === "부검서") {
        have = await session_item(3, 7);
      }
      if(itemName === "비녀") {
        have = await session_item(3, 8);
      }
      setItem(have);
    })();
  })

  return item;
};

const session_item = (chapter, item_id) => {
  return new Promise((resolve) =>
    axios
      .get(`/meet/${chapter}`)
      .then(({ data }) => {
        for(let id of data) {
          if(id == item_id) {
            resolve(true);
            return;
          }
        }
        resolve(false);
      })
      .catch((error) => {
        console.log(error);
        resolve();
      })
  );
} 