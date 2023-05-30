import { useState } from "react";
import { useLoaderData } from "react-router";

import { divToImg } from "services/propsFormat";

import styles from "./style.module.scss";

export default () => {
  const data = useLoaderData();
  const [idx, setIdx] = useState(0);

  return (
    <div
      className={styles.court}
      {...divToImg("/image/Court/background.png")}
    ></div>
  );
};
