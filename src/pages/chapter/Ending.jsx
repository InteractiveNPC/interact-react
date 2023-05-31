import { useEffect, useState } from "react";
import axios from "axios";

import Court from "components/Court";

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

export default ({ chapter }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      if (!data) {
        const data = await getCourtResult(chapter);
        console.log(data);
        setData(data);
      }
    })();
  });
  return <Court data={data} />;
};
