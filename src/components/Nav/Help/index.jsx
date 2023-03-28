import React, { Component } from "react";
import YouTube from "react-youtube";

import help_styles from "../../../styles/components/Help.module.css";
import { divToImg } from "../../../services/propsFormat";

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
      nav: ["증거수집", "사건노트", "공소장"],
      video: ["11cta61wi0g", "F0B7HDiY-10", "Jh4QFaPmdss"],
    };
  }

  render() {
    const changeIdx = (idx) => {
      if (idx >= 0 && idx < this.state.nav.length) {
        this.setState({ ...this.state, idx });
      }
    };
    return (
      <div className={help_styles.help}>
        <div className={help_styles.title}>
          <div
            className={help_styles.icon}
            {...divToImg("/image/Nav/help/Help_icon.png")}
          />
          도움말
        </div>
        <div className={help_styles.nav}>
          {this.state.nav.map((e, idx) => {
            if (idx === this.state.idx) {
              return <div className={help_styles.active}>{e}</div>;
            }
            return <div onClick={() => changeIdx(idx)}>{e}</div>;
          })}
        </div>
        <div className={help_styles.line}></div>
        <YouTube
          className={help_styles.video}
          videoId={this.state.video[this.state.idx]}
          opts={{
            width: "566px",
            height: "320px",
            playerVars: {
              autoplay: 1,
            },
          }}
        ></YouTube>
        <div className={help_styles.arrow}>
          <div
            className={help_styles.left}
            {...divToImg("/image/Nav/help/Help_nav_left.png")}
            onClick={() => changeIdx(this.state.idx - 1)}
          ></div>
          <div
            className={help_styles.right}
            {...divToImg("/image/Nav/help/Help_nav_right.png")}
            onClick={() => changeIdx(this.state.idx + 1)}
          ></div>
        </div>
        <div className={help_styles.info}>영상에 대한 설명</div>
        <div
          className={help_styles.x}
          {...divToImg("/image/Nav/help/Help_X.png")}
          onClick={this.props.closeEvent}
        ></div>
      </div>
    );
  }
}

export default Help;
