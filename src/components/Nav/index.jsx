import React, { Component } from "react";
import { setButtonEvent } from "/src/services/animation";

import Help from "./Help";
import Setting from "./Setting";

import { divToImg } from "../../services/propsFormat";
import index_styles from "./style.module.scss";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      window: null,
    };

    this.button = [];
  }

  navEvent = [
    () => alert("홈으로 이동!"),
    () => this.setState({ window: "help" }),
    () => this.setState({ window: "setting" }),
    () => alert("수사 기록으로 이동!"),
    () => alert("공소장으로 이동!"),
  ];

  render() {
    return (
      <div className={index_styles.Nav}>
        <div
          className={index_styles.home}
          {...divToImg("/image/Nav/HomeButton.png")}
          onClick={this.navEvent[0]}
        ></div>
        <div className={index_styles.buttons1}>
          <div ref={(ref) => (this.button[0] = ref)} />
          <div ref={(ref) => (this.button[1] = ref)} />
        </div>
        <div className={index_styles.buttons2}>
          <div ref={(ref) => (this.button[2] = ref)} />
          <div ref={(ref) => (this.button[3] = ref)} />
        </div>
        {this.state.window === "help" ? (
          <Help closeEvent={() => this.setState({ window: null })} />
        ) : null}
        {this.state.window === "setting" ? (
          <Setting closeEvent={() => this.setState({ window: null })} />
        ) : null}
      </div>
    );
  }

  componentDidMount() {
    this.navEvent.slice(1).forEach((e, idx) => (this.button[idx].onclick = e));

    setButtonEvent(this.button[0], "/image/Nav/Help");
    setButtonEvent(this.button[1], "/image/Nav/Setting");
    setButtonEvent(this.button[2], "/image/Nav/Investigation");
    setButtonEvent(this.button[3], "/image/Nav/IndictPage");
  }
}

export default Nav;
