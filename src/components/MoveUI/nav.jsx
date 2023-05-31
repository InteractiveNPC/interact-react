import { useState, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import styles from "./style.module.scss";
import { divToImg } from "services/propsFormat";

export default ({ locationNames, idx, setIdx, disabled }) => {
  if (!idx) idx = 0;
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const buttonArrow = {
    false: `${process.env.PUBLIC_URL}/image/MoveUI/MoveToPlace_Button_down.png`,
    true: `${process.env.PUBLIC_URL}/image/MoveUI/MoveToPlace_Button_up.png`,
  };

  const displayDropdown = () => {
    const divs = dropdownRef.current.childNodes;

    divs.forEach((div, i) => {
      anime({
        targets: div,
        top: dropdown ? [`${50 + 45 * i}px`, "0"] : ["0", `${50 + 45 * i}px`],
        easing: "linear",
        duration: dropdown ? 75 * (i + 1) : 100 * (i + 1),
        delay: dropdown ? 75 * (divs.length - i) : 0,
      });
    });

    setDropdown(!dropdown);
  };
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
                  {...divToImg("/image/MoveUI/MoveToPlace.png")}
                >
                  {e}
                </div>
              )
          )}
        </div>
        <div
          className={styles.button}
          onClick={() => (disabled ? () => {} : displayDropdown())}
          {...divToImg("/image/MoveUI/MoveToPlace.png")}
        >
          {locationNames[idx]}
          <img className={styles.button_arrow} src={buttonArrow[dropdown]} />
        </div>
      </div>

      <div className={styles.nav_arrow}>
        <img
          onClick={disabled ? () => {} : () => idx > 0 && setIdx(idx - 1)}
          src={`${process.env.PUBLIC_URL}/image/MoveUI/MoveToPlace_Left.png`}
        />
        <img
          onClick={
            disabled
              ? () => {}
              : () => idx < locationNames.length - 1 && setIdx(idx + 1)
          }
          src={`${process.env.PUBLIC_URL}/image/MoveUI/MoveToPlace_Right.png`}
        />
      </div>
    </>
  );
};
