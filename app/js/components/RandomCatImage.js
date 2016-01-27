'use strict';

import React from 'react';


class RandomCatImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="random-cat-image-component">
      <img src="http://lorempixel.com/400/200/cats"/>
    </div>;
  }
}

export default RandomCatImage;