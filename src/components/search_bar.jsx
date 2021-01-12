/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.timerID = undefined;
  }

  doSearch = (query) => {
    this.timerID = undefined;
    this.props.searchFn(query);
  }

  delaySearch = (event) => {
    if (this.timerID) clearTimeout(this.timerID);
    this.timerID = setTimeout(this.doSearch, 500, event.target.value);
  }

  render() {
    return (
      <div>
        <input
          className="form-control form-search"
          type="text"
          onChange={this.delaySearch}
        />
      </div>
    );
  }
}

export default SearchBar;
