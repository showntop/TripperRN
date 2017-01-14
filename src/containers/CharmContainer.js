'use strict';

import React, { Component } from 'react';

import {
  View,
  Platform,
} from 'react-native';

import {connect}       from 'react-redux'

import CharmView       from '../components/CharmView'  

class CharmContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CharmView needSpinner={false} {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const { charmStore } = state;
  return { charmStore };
 
}

export default connect(mapStateToProps)(CharmContainer);