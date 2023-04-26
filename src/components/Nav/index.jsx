import React, { Component } from "react";

import Help from "./Help";
import Setting from "./Setting";

import { divToImg } from "../../services/propsFormat";
import index_styles from "../../styles/components/Nav.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Help: false,
      setting: false,
    };
  }

  navEvent = [
    () => this.setState({ ...this.state, Help: !this.state.Help }),
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
            {...divToImg("/image/Nav/Help.png")}
          />
          <div
            onClick={this.navEvent[1]}
            {...divToImg("/image/Nav/Note.png")}
          />
          <div
            onClick={this.navEvent[2]}
            {...divToImg("/image/Nav/Home.png")}
          />
          <div
            onClick={this.navEvent[3]}
            {...divToImg("/image/Nav/Setting.png")}
          />
        </div>
        {this.state.Help ? <Help closeEvent={this.navEvent[0]} /> : null}
        {this.state.setting ? <Setting closeEvent={this.navEvent[3]} /> : null}
      </div>
    );
  }
}

export default Nav;
