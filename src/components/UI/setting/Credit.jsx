import React, { Component } from "react";
import setting_styles from "../../../styles/components/ui/setting.module.css";

class Credit extends Component {
  render() {
    return (
      <div
        className={setting_styles.window}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/image/ui/setting/credit.png"
          })`,
        }}
      ></div>
    );
  }
}

export default Credit;
