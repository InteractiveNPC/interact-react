import { useRef, useEffect } from "react";
import { divToImg } from "../../../services/propsFormat";
import { setButtonEvent } from "../animation";

import styles from "./style.module.scss";

const img_base = "/image/Help/setting-credit/";

export default ({ volume, setVolume }) => {
  const buttonRef = useRef();

  useEffect(() => {
    setButtonEvent(buttonRef.current, img_base + "setting_back");
  });

  return (
    <div className={styles.audio}>
      {["배경음", "배경음", "배경음"].map((val, i) => (
        <div className={styles.audio_setting} key={`audio_setting_${i}`}>
          <label htmlFor={`audio_input_${i}`}>
            <img src={`${process.env.PUBLIC_URL + img_base}Setting_name.png`} />
            {val}
          </label>
          <img
            className={styles.soundbar}
            src={`${process.env.PUBLIC_URL + img_base}Setting_soundbar.png`}
          />
          <input
            id={`audio_input_${i}`}
            type="range"
            min="0"
            max="100"
            defaultValue={volume[i] * 100}
            onChange={(e) => {
              console.log(e);
              const newVolume = volume;
              newVolume[i] = e.target.value / 100;
              setVolume(newVolume);
            }}
          />
        </div>
      ))}
      <div
        ref={buttonRef}
        className={styles.button}
        onClick={() => {
          setVolume([0.5, 0.5, 0.5]);
          for (let i = 0; i < 3; i++) {
            const input = document.getElementById(`audio_input_${i}`);
            input.value = 50;
          }
        }}
      />
    </div>
  );
};
