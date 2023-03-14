import { useState } from "react";

import styles from '../../../styles/components/ui/indict.module.css';

function Indict() {
  const [sin, setSin] = useState("");
  const [page, setPage] = useState(1);

  const sinClick = (event) => {
    // console.log(event.target);
    if (event.target.className === styles.crime1) {
      console.log("재물은닉죄");
      setSin("재물은닉죄");
    }
    if (event.target.className === styles.crime2) {
      console.log("절도죄");
      setSin("절도죄");
    }
    if (event.target.className === styles.crime3) {
      console.log("점유이탈물횡령죄");
      setSin("점유이탈물횡령죄");
    }
  }

  const backPage = (event) => {
    setPage((prev) => prev - 1)
  }

  const nextPage = (event) => {
    setPage((prev) => prev + 1)
  }

  const submit = (event) => {
    alert('제출');
  }

  return (
    <div className={styles.frame}>
      <img src="/image/ui/indict/Fairytale1_IndictPage_3.png" alt="back1" className={styles.back3}/> 
      <img src="/image/ui/indict/Fairytale1_IndictPage_2.png" alt="back1" className={styles.back2}/> 
      <img src="/image/ui/indict/Fairytale1_IndictPage_1.png" alt="back1" className={styles.back1}/> 
      <div className={styles.page}>{page}/3</div>
      <img src="/image/ui/indict/CrimeName.png" alt="crimeName" className={styles.crimeName}/> 
      <div className={styles.answer}>{sin}</div>

      <img src={``} />
      <img src={`/image/ui/indict/BackButton_${page === 1 ? "x" : "o"}.png`}
            alt="back" 
            className={styles.backButton_o}
            onClick={page === 1 ? false : backPage}/>
      <img src={`/image/ui/indict/NextButton_${page === 3 ? "x" : "o"}.png`}
            alt="next" 
            className={styles.nextButton_o}
            onClick={page === 3 ? false : nextPage}/>

      <img src="/image/ui/indict/Fairytale1_IndictPage_Option_1.png" 
            alt="crime1" 
            className={styles.crime1} 
            onClick={sinClick}/>
      <img src="/image/ui/indict/Fairytale1_IndictPage_Option_2.png" 
            alt="crime2" 
            className={styles.crime2}
            onClick={sinClick}/>
      <img src="/image/ui/indict/Fairytale1_IndictPage_Option_3.png" 
            alt="crime3" 
            className={styles.crime3} 
            onClick={sinClick}/>

      <img src="/image/ui/indict/SubmitButton.png" alt="submit" className={styles.submit} onClick={submit} />
    </div>
  );
}

export default Indict;