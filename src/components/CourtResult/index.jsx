import { useCourtResult } from "./hooks";

import styles from "./style.module.scss";

export default ({ tale }) => {
  const [result, move] = useCourtResult(tale);

  return (
    <div className={styles.box}>
      {result && (
        <>
          <div>{result.title}</div>
          <div>
            {result.crime.article} <b>{result.crime.title}</b>에 근거해
            나무꾼에게 <b>{result.guilty}</b>를 선고한다.
          </div>
          <div dangerouslySetInnerHTML={{ __html: result.reason }}></div>
          <div>{result.crime.info}</div>
        </>
      )}
      <div className={styles.nav}>
        <div onClick={() => move(-1)}>왼쪽</div>
        <div onClick={() => move(1)}>오른쪽</div>
      </div>
    </div>
  );
};
