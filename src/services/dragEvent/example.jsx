import React, { Component } from "react";

import styles from "./example.module.css";

import { setDragEvent } from ".";

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
    setDragEvent(object, target, () => {
      object.style.display = "none";
      target.style.background = "gray";
    });
  }
}

export default DragEventExample;
