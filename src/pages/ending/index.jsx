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
        resolve({});
      })
  );
};

export const loader = async () => {
  return getCourtResult(0);
};

export default () => {
  return <Court />;
};
