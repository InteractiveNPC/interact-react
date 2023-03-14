import React, { Component } from "react";

import Setting from "./Setting";

import { divToImg } from "../../services/propsFormat";
import index_styles from "../../styles/components/Nav/index.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setting: false,
    };
  }

  navEvent = [
    () => alert("사건 노트로 이동!"),
    () => alert("홈으로 이동!"),
    () => this.setState({ ...this.state, setting: !this.state.setting }),
  ];

  render() {
    return (
      <div id="UI">
        <div className={index_styles.nav}>
          <div
            onClick={this.navEvent[0]}
            {...divToImg("/image/Nav/Note.png")}
          />
          <div
            onClick={this.navEvent[1]}
            {...divToImg("/image/Nav/Home.png")}
          />
          <div
            onClick={this.navEvent[2]}
            {...divToImg("/image/Nav/Setting.png")}
          />
        </div>
        {this.state.setting ? <Setting closeEvent={this.navEvent[2]} /> : null}
      </div>
    );
  }
}

export default Nav;
