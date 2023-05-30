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

export const loader = async ({ params }) => {
  const fairy = params.fairy ?? 0;
  return getCourtResult(fairy);
};

export default () => {
  return <Court />;
};
