import React, { Component } from "react";

import Nav from "./Nav";
import Setting from "./Setting";

class UI extends Component {
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
        <Nav
          clickEvent={
            this.state.setting ? this.navEvent.map(() => {}) : this.navEvent
          }
        />
        {this.state.setting ? <Setting closeEvent={this.navEvent[2]} /> : null}
      </div>
    );
  }
}

export default UI;
