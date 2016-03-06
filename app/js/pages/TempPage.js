'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import Controller from '../components/TemporalComponents'


class TempPage extends React.Component {

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

          <h4>Temp page</h4>

          <Controller enabled={false}/>
        </section>
      </DocumentTitle>
    );
  }
}

export default TempPage;

