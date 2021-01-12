import React from 'react';

import Gif from './gif';

function GifList({ gifs, selectFn }) {
  return (
    <div className="gif-list">
      { gifs.map(gif => <Gif id={gif} key={gif} selectFn={selectFn} />) }
    </div>
  );
}

export default GifList;
