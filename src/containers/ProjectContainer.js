'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'

import ProjectView from '../components/ProjectView'

class ProjectContainer extends Component {
  render() {
    return (
      <ProjectView {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps (state) {
  const {project} = state;
  return project.currentProject;
}

export default connect(mapStateToProps)(ProjectContainer);
