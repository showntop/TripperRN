'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'
import ProjectList from '../components/ProjectList'

class ProjectListContainer extends Component {
  render() {
    return (
      <ProjectList {...this.props} />
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps (state) {
  const {projectStore} = state;
  return {projectStore};
 
}

export default connect(mapStateToProps)(ProjectListContainer);
