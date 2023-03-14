import React, { Component } from "react";
import PropTypes from "prop-types";
//import index_styles from "../../styles/components/Nav.module.css";

class MoveUI extends Component {
  render() {
    return <div></div>;
  }
}

MoveUI.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number,
};
MoveUI.defaultProps = {
  idx: 0,
};

export default MoveUI;
