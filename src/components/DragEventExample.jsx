import React, { Component } from "react";

import styles from "../css/dragEventExample.module.css";

import DragEvent from "../module/DragEvent";

class DragEventExample extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <div id="object" className={styles.object} />
        <div id="target" className={styles.target} />
      </div>
    );
  }
  componentDidMount() {
    const object = document.getElementById("object");
    const target = document.getElementById("target");
    new DragEvent(object, target, () => {
      object.style.display = "none";
      target.style.background = "gray";
    });
  }
}

export default DragEventExample;
