import React, { Component } from "react";

import nav_styles from "../../styles/components/ui/nav.module.css";
const Nav = () => {
  return (
    <div className={nav_styles.nav}>
      <img src={process.env.PUBLIC_URL + "/image/ui/toNote.png"} />
      <img src={process.env.PUBLIC_URL + "/image/ui/toMain.png"} />
      <img src={process.env.PUBLIC_URL + "/image/ui/toSetting.png"} />
    </div>
  );
};

class UI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setting: false,
    };
  }
  render() {
    return (
      <div id="UI">
        <Nav />
      </div>
    );
  }
}

export default UI;
