import React, { Component } from "react";
import { divToImg } from "../../../services/propsFormat";
import setting_styles from "../../../styles/components/ui/setting.module.css";

class Credit extends Component {
  render() {
    return (
      <div
        className={setting_styles.window}
        {...divToImg("/image/ui/setting/CreditBackground.png")}
      ></div>
    );
  }
}

export default Credit;
