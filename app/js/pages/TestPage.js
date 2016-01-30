'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import ImageGallery from '../components/ImageGallery'
import Controller from '../components/TemporalComponents'


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
          <Controller enabled={false}/>
          <ImageGallery categories={this.categories}/>
        </section>
      </DocumentTitle>
    );
  }
}

export default TestPage;