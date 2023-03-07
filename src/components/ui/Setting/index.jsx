import React, { Component } from "react";
import { divToImg } from "../../../services/propsFormat";

import setting_styles from "../../../styles/components/ui/setting.module.css";

import Audio from "./Audio";
import Credit from "./Credit";
import Nav from "./Nav";

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "audio",
    };
  }

  navEvent = [
    () => this.setState({ ...this.state, display: "audio" }),
    () => this.setState({ ...this.state, display: "credit" }),
  ];

  render() {
    return (
      <div className={setting_styles.setting}>
        <Nav selected={this.state.display} clickEvent={this.navEvent} />
        {this.state.display === "audio" ? <Audio /> : null}
        {this.state.display === "credit" ? <Credit /> : null}
        <div
          className={setting_styles.x}
          {...divToImg("/image/ui/setting/Setting_X.png")}
          onClick={this.props.closeEvent}
        ></div>
      </div>
    );
  }
}

export default Setting;
