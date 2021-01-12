/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectFn } = this.props;
    if (selectFn) {
      // console.log(e.key);
      selectFn(id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <input type="image" src={src} alt="" className="gif" onClick={this.handleClick} onKeyUp={this.handleClick} />
    );
  }
}

export default Gif;
