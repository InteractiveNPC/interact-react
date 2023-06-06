import { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import styles from "./style.module.scss";
import { divToImg } from "../../services/propsFormat";
import { setButtonEvent } from "./animation";

const img_base = "/image/Investigation/Talk/UI/";

export default ({ locationNames, idx, setIdx, disabled }) => {
  if (!idx) idx = 0;
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const arrowRef = useRef();

  const displayDropdown = () => {
    const divs = dropdownRef.current.childNodes;

    divs.forEach((div, i) => {
      anime({
        targets: div,
        top: dropdown ? [`${50 * (i + 1)}px`, "0"] : ["0", `${50 * (i + 1)}px`],
        easing: "linear",
        duration: dropdown ? 75 * (i + 1) : 100 * (i + 1),
        delay: dropdown ? 75 * (divs.length - i) : 0,
      });
    });
    anime({
      targets: arrowRef.current,
      rotate: dropdown ? [180, 0] : [0, 180],
      duration: 50,
    });

    setDropdown(!dropdown);
  };

  const resetDropdown = () => {
    const divs = dropdownRef.current.childNodes;
    
    divs.forEach((div, i) => {
      anime({
        targets: div,
        top: [`${50 * (i + 1)}px`, "0"],
        easing: "linear",
        duration: 0,
        delay: 0,
      });
    });
    anime({
      targets: arrowRef.current,
      rotate: [180, 0],
      duration: 0,
    });
    setDropdown(false);
  }

  useEffect(() => {
    const divs = dropdownRef.current.childNodes;
    divs.forEach((div) => {
      setButtonEvent(div, img_base + "Dropdown_click");
    });
  });
  return (
    <>
      <div className={styles.nav_button}>
        <div className={styles.dropdown} ref={dropdownRef}>
          {locationNames.map(
            (e, i) =>
              idx != i && (
                <div
                  key={`move_dropdown_${i}`}
                  onClick={
                    disabled
                      ? () => {}
                      : () => {
                          displayDropdown();
                          setTimeout(function () {
                            setIdx(i);
                          }, 75 * locationNames.length);
                        }
                  }
                >
                  {e}
                </div>
              )
          )}
        </div>
        <div
          className={styles.button}
          onClick={() => (disabled ? () => {} : displayDropdown())}
          {...divToImg(img_base + "Dropdown_normal.png")}
        >
          {locationNames[idx]}
          <img
            ref={arrowRef}
            className={styles.button_arrow}
            src={`${process.env.PUBLIC_URL + img_base}Dropdown_arrow.png`}
          />
        </div>
      </div>

      <div className={styles.nav_arrow}>
        <img
          onClick={disabled 
            ? () => {} 
            : () => {
              if (idx > 0) setIdx(idx - 1);
              else setIdx(locationNames.length - 1);
              resetDropdown();
            }}
            src={`${process.env.PUBLIC_URL + img_base}Arrow_left.png`}
        />
        <img
          onClick={
            disabled
              ? () => {}
              : () => {
                if (idx < locationNames.length - 1) setIdx(idx + 1);
                else setIdx(0);
                resetDropdown();
              }
          }
          src={`${process.env.PUBLIC_URL + img_base}Arrow_right.png`}
        />
      </div>
    </>
  );
};
