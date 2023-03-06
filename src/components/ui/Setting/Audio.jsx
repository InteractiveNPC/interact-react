import React, { Component } from "react";
import setting_styles from "../../../styles/components/ui/setting.module.css";

class Audio extends Component {
  render() {
    return (
      <div
        className={setting_styles.window}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/image/ui/setting/audio.png"
          })`,
        }}
      >
        <div className={setting_styles.audio_inputs}>
          <input name="background" type="range" min="1" max="100" />
          <input name="effectsound" type="range" min="1" max="100" />
          <input name="voicesound" type="range" min="1" max="100" />
        </div>
      </div>
    );
  }
}

export default Audio;
