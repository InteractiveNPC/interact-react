import React, { Component } from "react";
import { divToImg } from "../../../services/propsFormat";
import setting_styles from "./style.module.scss";

class Audio extends Component {
  render() {
    return (
      <div
        className={setting_styles.window}
        {...divToImg("/image/Nav/setting/AudioBackground.png")}
      >
        <div className={setting_styles.audio_inputs}>
          <input name="background" type="range" min="1" max="100" />
          <input name="effectsound" type="range" min="1" max="100" />
          <input name="voicesound" type="range" min="1" max="100" />
        </div>
        <div
          className={setting_styles.resetButton}
          {...divToImg("/image/Nav/setting/SettingResetButton.png")}
          onClick={() => {
            const inputs = document.querySelectorAll(
              `.${setting_styles.audio_inputs} > input`
            );
            inputs.forEach((input) => (input.value = 50));
          }}
        ></div>
      </div>
    );
  }
}

export default Audio;
