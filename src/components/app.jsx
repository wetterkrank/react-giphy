import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY; // so that we don't have to check it in

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGif: "3oriO0OEd9QIDdllqo",
      gifs: []
    };
    this.search('futurama');
  }

  search = (query) => {
    giphy(GIPHY_KEY).search({ q: query, limit: 20 }, (err, res) => {
      if (res.data) {
        const ids = res.data.map(el => el.id);
        this.setState({ gifs: ids });
      }
    });
  }

  setCurrent = (gif) => {
    this.setState({ currentGif: gif });
  }

  render() {
    const { currentGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.search} />
          <div className="selected-gif">
            <Gif id={currentGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectFn={this.setCurrent} />
        </div>
      </div>
    );
  }
}

export default App;
