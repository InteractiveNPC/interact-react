import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/components/MoveUI.module.css";
import { divToImg } from "../../services/propsFormat";

class MoveUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };
  }
  moveLocation = (idx) => {
    if (idx >= 0 && idx < this.props.locationNames.length)
      this.props.onchange(idx);
  };
  dropdownTap = (idx) => {
    this.moveLocation(idx);
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    return (
      <div class={styles.root}>
        {this.state.dropdown ? (
          <div class={styles.dropdown}>
            <div></div>
            {this.props.locationNames.map((e, idx) =>
              this.props.idx != idx ? (
                <div onClick={() => this.dropdownTap(idx)}>{e}</div>
              ) : null
            )}
          </div>
        ) : null}
        <div
          class={styles.location}
          onClick={() => this.dropdownTap(this.props.idx)}
        >
          {this.props.locationNames[this.props.idx]}
        </div>
        <img
          class={styles.left}
          onClick={() => this.moveLocation(this.props.idx - 1)}
          src={
            process.env.PUBLIC_URL + "/image/MoveUI/MoveToPlace_ButtonLeft.png"
          }
        />
        <img
          class={styles.right}
          onClick={() => this.moveLocation(this.props.idx + 1)}
          src={
            process.env.PUBLIC_URL + "/image/MoveUI/MoveToPlace_ButtonRight.png"
          }
        />
      </div>
    );
  }
}

MoveUI.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number,
  onchange: PropTypes.func.isRequired,
};
MoveUI.defaultProps = {
  idx: 0,
};

export default MoveUI;
