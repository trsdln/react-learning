'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import RandomCatImage from '../components/RandomCatImage'


class RandomImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="random-image">
      <img src={'http://lorempixel.com/400/200/' + this.props.category}/>
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
      return <RandomImage category={categoryName} key={nextKey++}/>
    });

    return <div>{this.images}</div>;
  }
}

class TestPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.categories = [
      'sports', 'cats', 'city', 'nature'
    ];

    return (
      <DocumentTitle title="Test">
        <section className="test-page">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <h4>Test page</h4>
          <ImageGallery categories={this.categories}/>
        </section>
      </DocumentTitle>
    );
  }
}

export default TestPage;