import React from 'react';

import CommentsWidget from '../components/CommentsWidget'


class RandomImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="random-image">
      <img src={'http://lorempixel.com/400/200/' + this.props.category}/>
      <CommentsWidget elementId={this.props.elementId}/>
    </div>
  }
}


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var randomKey = () => Math.round(Math.random() * 10000);
    var nextKey = randomKey();

    this.images = this.props.categories.map((categoryName)=> {
      let elementId = nextKey++;
      return <RandomImage category={categoryName} key={elementId} elementId={elementId}/>
    });

    return <div>{this.images}</div>;
  }
}

export default ImageGallery;
