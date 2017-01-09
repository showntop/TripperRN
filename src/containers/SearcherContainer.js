'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'

import SearcherView from '../components/SearcherView'

class SearcherContainer extends Component {
  render() {
    return (
      <SearcherView {...this.props} />
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps (state) {
  const {projectStore} = state;
  return {projectStore};
 
}

export default connect(mapStateToProps)(SearcherContainer);
