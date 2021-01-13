/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    if (this.props.selectFn) {
      // console.log(e.key);
      this.props.selectFn(this.props.id);
    }
  }

  render() {
    if (!this.props.id) return null;

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <input type="image" src={src} alt="" className="gif" onClick={this.handleClick} onKeyUp={this.handleClick} />
    );
  }
}

export default Gif;
