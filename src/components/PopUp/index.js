import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class PopUp extends Component {
  constructor(props) {
    super(props);
  }

  addType = type => {
    console.log(type);
  };

  render() {
    return (
      <span className="tooltiptext">
        <button onClick={() => this.addType(0)}> Add Source </button>
        <button onClick={() => this.addType(1)}> Remove </button>
      </span>
    );
  }
}
/**
PopUp.propTypes = {
  article: PropTypes.string.isRequired,
  claims: PropTypes.array.isRequired
};
**/

export default PopUp;
