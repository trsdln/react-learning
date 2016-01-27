'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import RandomCatImage from '../components/RandomCatImage'


const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <div>
            Home
          </div>

          <h4>My first component</h4>

          <RandomCatImage></RandomCatImage>

          <div>
            <Link to="/search">Search</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;