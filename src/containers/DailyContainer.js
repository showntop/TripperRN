'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux'

import DailyView from '../components/DailyView'

class DailyContainer extends Component {
  render() {
    return (
      <DailyView  {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps (state) {
  const {project} = state;
  return project.dailyProject;
 
}

export default connect(mapStateToProps)(DailyContainer);